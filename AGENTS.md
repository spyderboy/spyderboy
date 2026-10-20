<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Jargon

Every piece of jargon on the site is explained in `lib/glossary.ts` and linked where a visitor reads it. The
audience has used ChatGPT and nothing more; if a CEO might stop at a word, it is jargon.

**The check enforces it.** `npm run jargon` (also run by `npm run build`, so a deploy fails while anything is
unreviewed, and by projectsdash's export right after it writes new project copy) lists every:
- glossary term in project copy that is neither linked nor skipped (`lib/projectTerms.ts`);
- project tag or language with no glossary entry;
- glossary term in hand-written copy whose first use isn't wrapped in `<Term id="…">`;
- word that looks like jargon (acronyms, CamelCase, dotted names, model sizes, mid-sentence names) that the
  glossary doesn't explain and `NOT_JARGON` doesn't list;
- `.tsx` file under `components/` or `app/` not yet classified as copy or not-copy.

**When it flags something, resolve each item; never quiet the check.**
1. **New jargon** → add a glossary entry, written to the rules at the top of `lib/glossary.ts` (`short` for the
   overlay, `body` for /jargon, an everyday `analogy` where one helps, `aliases` for other spellings, `related`).
   Pick the category; a project's tech tag goes in "stack".
2. **A term in hand-written copy** → wrap its first use in each section in `<Term id="…">` (`dark` on dark
   backgrounds). Only the first use per section, never every occurrence.
3. **A term in project copy** → add its id to `PROJECT_TERMS[project]` to link it, or to `PROJECT_TERMS_SKIPPED`
   with the reason when the word means something else there (a game's "merge", an app's own "roadmap").
4. **Not jargon** (a name, a place, something spelled out in the same line) → `NOT_JARGON` in
   `lib/jargonReview.ts`, with the reason. Real jargon never goes there.
5. **A new component or page** → `COPY_FILES` if a visitor reads text in it, else `NOT_COPY_FILES` with the reason.

Project copy is written in each project's PROJECT.md and exported by projectsdash; it stays plain text (no
markup). Links there are added at render time from `lib/projectTerms.ts`.

What the check cannot see: a brand-new technical word that is plain lower-case English, or a capitalised name at the
start of a sentence. Read new copy with the audience in mind as well.
