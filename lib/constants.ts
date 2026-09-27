import stats from './stats.generated.json';

// Absolute ("/#…") so they also work from the /projects/<id> pages.
export const NAV_LINKS = [
  { label: 'work', href: '/#projects' },
  { label: 'engine', href: '/#engine' },
  { label: 'contact', href: '/#contact' },
];

// stats.generated.json is written by projectsdash's export from the Xanadu task
// logs and git history, so these stay true as the numbers move.
export const STATS = stats;

export const ENGINE_STATS = [
  { label: 'Tasks completed autonomously', value: `${(Math.floor(stats.tasksCompleted / 100) * 100).toLocaleString('en-US')}+` },
  { label: 'First-pass success rate', value: `${stats.firstPassRate}%` },
  { label: 'Commits in the last 30 days', value: stats.commits30d.toLocaleString('en-US') },
];

export const CONTACT = {
  linkedin: 'https://linkedin.com/in/joseantoniolicon',
  github: 'https://github.com/spyderboy',
  email: 'dev@spyderboy.com',
};

// Cal.com event for a 30-minute consulting conversation (inline embed + direct link).
export const CAL_LINK = 'antonio-licon-3amof8/30min';
export const CAL_URL = `https://cal.com/${CAL_LINK}`;

// Google Analytics 4 measurement ID.
export const GA_ID = 'G-W9SGW3PGVH';

export const SITE = {
  url: 'https://spyderboy.com',
  name: 'Spyderboy Studio',
  title: 'Spyderboy Studio — Jose Antonio Licon',
  description:
    'Jose Antonio Licon (Spyderboy) builds apps and games — Galaxican, Retro Car Radio, Magic Task Hat, HootPGH — with Xanadu, his local-LLM development loop.',
  // Also the social-share image (square, so the X card is "summary", not large).
  avatar: 'https://avatars.githubusercontent.com/u/4152973?v=4',
};
