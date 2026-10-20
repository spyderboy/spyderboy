// The jargon check: every piece of jargon on the site is explained in lib/glossary.ts and linked where it is used,
// or deliberately left alone with a reason in lib/jargonReview.ts / lib/projectTerms.ts. Runs before every build
// (npm "prebuild") and after projectsdash exports new copy; exits 1 with a to-do list when anything is unreviewed.
//   npx tsx scripts/jargon-check.ts
import fs from 'node:fs';
import path from 'node:path';
import { GLOSSARY, entryForLabel, findTerms } from '../lib/glossary';
import { PROJECT_TERMS, PROJECT_TERMS_SKIPPED } from '../lib/projectTerms';
import { COPY_FILES, COPY_TERMS_SKIPPED, NOT_COPY_FILES, NOT_JARGON } from '../lib/jargonReview';
import projects from '../lib/projects.generated.json';

const ROOT = path.resolve(__dirname, '..');
const ALL_IDS = GLOSSARY.map((e) => e.id);
const problems: string[] = [];

// Every way the glossary already spells a term, lower-cased, for "is this candidate already explained?"
const KNOWN = new Set(GLOSSARY.flatMap((e) => [e.term, ...(e.aliases ?? [])]).map((s) => s.toLowerCase()));
const known = (word: string) =>
  KNOWN.has(word.toLowerCase()) ||
  [...KNOWN].some((k) => new RegExp(`(^|[^\\w])${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^\\w]|$)`, 'i').test(k));

// A reviewed name covers its parts too ("App Store" covers "Store").
const NOT_JARGON_NAMES = Object.keys(NOT_JARGON).map((k) => k.toLowerCase());
const notJargon = (word: string) =>
  NOT_JARGON_NAMES.some((k) => k === word.toLowerCase() || ` ${k} `.includes(` ${word.toLowerCase()} `));

// Words that look like jargon: acronyms (LLM, GPU), CamelCase (RunPod), dotted or underscored names (Next.js,
// BAD_PATTERNS), and model sizes (27B).
const CANDIDATE = /\b(?:[A-Z][A-Z0-9]+s?|[a-z]*[A-Z][a-z0-9]+[A-Z][\w]*|[A-Za-z]+(?:[._][A-Za-z]+)+|\d+B)\b/g;

// Capitalised words in mid-sentence: names, products and services (Kubernetes, Supabase). Each new one is reviewed
// once: a name goes in NOT_JARGON, a technology gets a glossary entry.
const MID_SENTENCE_NAME = /(?<=[a-z0-9,;:)] )[A-Z][a-z]+(?:[ -][A-Z][a-z]+)*\b/g;

function candidates(text: string, where: string, code: Set<string> = new Set()) {
  for (const m of [...text.matchAll(CANDIDATE), ...text.matchAll(MID_SENTENCE_NAME)]) {
    const w = m[0];
    if (code.has(w.split('.')[0])) continue; // a name the file's own code declares (PARTS, c.facts.map)
    if (notJargon(w) || known(w)) continue;
    problems.push(
      `${where}: "${w}" looks like jargon — explain it in lib/glossary.ts, or add it to NOT_JARGON with the reason`,
    );
  }
}

// --- Project pages (copy from projectsdash) ---
for (const p of projects) {
  const where = `project ${p.id}`;
  const linked = PROJECT_TERMS[p.id] ?? [];
  const skipped = PROJECT_TERMS_SKIPPED[p.id] ?? {};
  for (const id of [...linked, ...Object.keys(skipped)]) {
    if (!ALL_IDS.includes(id))
      problems.push(`${where}: lib/projectTerms.ts names "${id}", which is not in the glossary`);
  }
  const reported = new Set<string>();
  for (const text of [p.tagline, p.description, ...p.features]) {
    for (const piece of findTerms(text, ALL_IDS, new Set())) {
      if (typeof piece === 'string') continue;
      if (linked.includes(piece.id) || piece.id in skipped || reported.has(piece.id)) continue;
      reported.add(piece.id);
      problems.push(
        `${where}: "${piece.text}" (${piece.id}) is unreviewed — add it to PROJECT_TERMS["${p.id}"] to link it, or to PROJECT_TERMS_SKIPPED with the reason`,
      );
    }
    candidates(text, where);
  }
  for (const label of [...p.tags, ...p.languages]) {
    if (!entryForLabel(label) && !notJargon(label)) {
      problems.push(
        `${where}: tag "${label}" has no explanation — add a "stack" entry (or an alias) to lib/glossary.ts`,
      );
    }
  }
}

// --- Hand-written copy ---
const tsx = ['components', 'app']
  .flatMap((dir) => fs.readdirSync(path.join(ROOT, dir), { recursive: true }).map((f) => path.join(dir, String(f))))
  .filter((f) => f.endsWith('.tsx'));
for (const f of tsx) {
  if (!COPY_FILES.includes(f) && !(f in NOT_COPY_FILES)) {
    problems.push(
      `${f}: not classified — list it in COPY_FILES (it has site copy) or NOT_COPY_FILES (with the reason)`,
    );
  }
}

// The words a visitor reads: JSX text and prose string literals, without attributes, code or comments.
function visibleText(src: string): string {
  const s = src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/^\s*\/\/.*$/gm, ' ')
    .replace(/^import .*$/gm, ' ')
    .replace(/\$\{[^}]*\}/g, ' ') // template placeholders are code
    .replace(/\b\w*(?:description|title)\w*\s*[:=]\s*(['"`])(?:(?!\1)[^\\]|\\.)*\1/gi, ' ') // metadata: search results, not the page
    .replace(
      /\b(?:className|href|src|alt|key|id|style|aria-[\w-]+|rel|target|type|role|sizes|width|height)=(?:"[^"]*"|'[^']*'|\{`[^`]*`\}|\{[^{}]*\})/g,
      ' ',
    )
    .replace(/<Term\b[^>]*>[\s\S]*?<\/Term>/g, ' '); // already linked
  const prose = [...s.matchAll(/(['"`])((?:(?!\1)[^\\\n]|\\.){12,}?)\1/g)].map((m) => m[2]).filter((t) => / /.test(t));
  // JSX expressions ({' '}, {value}) split the text around them; drop them (innermost first) to read the prose.
  let jsx = s;
  for (let i = 0; i < 4; i++) jsx = jsx.replace(/\{[^{}\n]*\}/g, ' '); // one-line only: objects span lines
  jsx = jsx.replace(/=>/g, ' ');
  // Text between tags, minus what is plainly code (TypeScript generics and logic also sit between > and <).
  const jsxText = [...jsx.matchAll(/>([^<>]+)</g)]
    .map((m) => m[1])
    .filter((t) => !/[=;]|&&|\|\||\b(?:const|let|return|function|export|import|await|async|typeof)\b/.test(t));
  return [...jsxText, ...prose].join('\n');
}

for (const f of COPY_FILES) {
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const linkedHere = new Set([...src.matchAll(/<Term\s+id="([\w-]+)"/g)].map((m) => m[1]));
  const skipped = COPY_TERMS_SKIPPED[f] ?? {};
  const text = visibleText(src);
  const seen = new Set<string>();
  for (const piece of findTerms(text, ALL_IDS, new Set())) {
    if (typeof piece === 'string' || linkedHere.has(piece.id) || piece.id in skipped || seen.has(piece.id)) continue;
    seen.add(piece.id);
    problems.push(
      `${f}: "${piece.text}" (${piece.id}) is not linked — wrap its first use in <Term id="${piece.id}">, or add it to COPY_TERMS_SKIPPED["${f}"] with the reason`,
    );
  }
  const declared = new Set(
    [...src.matchAll(/\b(?:const|let|function|interface|type|class)\s+(\w+)|\(\s*\{?\s*(\w+)|\b(\w+)\s*=>/g)].map(
      (m) => m[1] ?? m[2] ?? m[3],
    ),
  );
  for (const m of src.matchAll(/^import\s+(?:(\w+)|\{([^}]*)\})/gm)) {
    for (const n of (m[1] ?? m[2] ?? '').split(',')) declared.add(n.trim());
  }
  candidates(text, f, declared);
}

const unique = [...new Set(problems)];
if (unique.length) {
  console.error(`Jargon check: ${unique.length} item(s) to review (AGENTS.md "Jargon")\n`);
  for (const p of unique) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(
  `Jargon check: OK (${GLOSSARY.length} terms, ${projects.length} projects, ${COPY_FILES.length} copy files)`,
);
