// Which glossary terms to mark on each project page (by project id). Project copy comes from each PROJECT.md, so
// terms are matched in the text rather than marked by hand; listing them per project keeps a word from being
// linked where it means something else (Magic Task Hat's "commit to a sprint" is not a git commit).
export const PROJECT_TERMS: Record<string, readonly string[]> = {
  xanadu: ['autonomous-loop', 'roadmap', 'local-model', 'ladder', 'velocity-log', 'rule-promotion'],
  personalagile: ['agile', 'sprint'],
  'witches-bricks': ['spec', 'tests'],
  projectsdash: ['commit', 'roadmap', 'local-model', 'runpod', 'gpu', 'agentic-assistant'],
};

// Marked on every project page, in the closing "built with Xanadu" line.
export const XANADU_LINE_TERMS: readonly string[] = ['autonomous-loop'];
