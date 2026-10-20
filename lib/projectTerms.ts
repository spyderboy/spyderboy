// Which glossary terms to mark on each project page (by project id). Project copy comes from each PROJECT.md, so
// terms are matched in the text rather than marked by hand; listing them per project keeps a word from being
// linked where it means something else (Magic Task Hat's "commit to a sprint" is not a git commit).
export const PROJECT_TERMS: Record<string, readonly string[]> = {
  xanadu: ['autonomous-loop', 'roadmap', 'task', 'local-model', 'ladder', 'velocity-log', 'rule-promotion'],
  personalagile: ['agile', 'sprint'],
  'witches-bricks': ['spec', 'tests'],
  projectsdash: ['commit', 'roadmap', 'local-model', 'runpod', 'gpu', 'agentic-assistant'],
};

// Glossary terms that appear in a project's copy but are deliberately not linked, with the reason. The jargon
// check fails on any term found in a project's copy that is in neither list.
export const PROJECT_TERMS_SKIPPED: Record<string, Record<string, string>> = {
  galaxican: { merge: 'a game move (merging units), not merging code' },
  'witches-bricks': { merge: 'a game move (merging bricks), not merging code' },
  personalagile: {
    roadmap: 'the app’s own roadmap screen, not a Xanadu roadmap',
    commit: '"commit to a sprint", not a git commit',
    task: 'the app’s to-do items, not Xanadu tasks',
  },
};

// Marked on every project page, in the closing "built with Xanadu" line.
export const XANADU_LINE_TERMS: readonly string[] = ['autonomous-loop'];
