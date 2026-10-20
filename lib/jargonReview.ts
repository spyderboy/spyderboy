// The jargon review: decisions the jargon check (scripts/jargon-check.ts, run before every build) needs from a
// person. Every term the check finds must be explained (lib/glossary.ts) and linked, or listed here with the
// reason it isn't. See AGENTS.md "Jargon".

// Words the check flags as possible jargon (acronyms, CamelCase, dotted names) that need no explanation: product
// and company names, and words every reader knows. Never list real jargon here to quiet the check; give it a
// glossary entry instead.
export const NOT_JARGON: Record<string, string> = {
  // Names
  ProjectsDash: 'a project on this site, with its own page',
  LinkedIn: 'a company name',
  GitHub: 'a company name',
  YouTube: 'a company name',
  'Cal.com': 'the booking service, named where it is used',
  'cal.com': 'the booking service, named where it is used',
  'spyderboy.com': 'this site',
  WYEP: 'a Pittsburgh radio station',
  FM: 'radio band, in "WYEP 91.3 FM"',
  LLC: 'part of a company name in the trademark notice',
  PA: 'Pennsylvania, in "Pittsburgh, PA"',
  EU: 'everyday abbreviation',
  EEA: 'used in the privacy notice next to "EU", where the legal term is the point',
  UK: 'everyday abbreviation',
  VC: 'venture capital: everyday business shorthand for this audience',
  'Jose Antonio Licon': 'me',
  'Spyderboy Studio': 'this studio',
  'MacBook Air': 'a laptop everyone knows',
  Netlify: 'the web host, described as such in the privacy notice',
  Xanadu: 'the system this site is about; explained in the Engine section and on its own page',
  Engine: 'the name of a section on this page',
  Pittsburgh: 'a place',
  Switzerland: 'a place',
  Apple: 'a company name',
  'Apple Inc': 'a company name, in the trademark notice',
  'App Store': 'a store everyone knows',
  'Google Play': 'a store everyone knows',
  Android: 'phone platform everyone knows',
  Mac: 'a computer everyone knows',
  Gemini: 'an AI assistant everyone has heard of, named as such',
  Alexa: 'a voice assistant everyone knows',
  'Google Analytics': 'named in the privacy notice, which explains what it does',
  'Wild Pockets': 'a former employer',
  'Asia City Media Group': 'a former employer',
  'Magic Task Hat': 'a project on this site',
  'Retro Car Radio': 'a project on this site',
  'Radio Browser': 'the station directory Retro Car Radio uses, named as such',
  'Public Radio': 'a preset set name in Retro Car Radio',
  'Golden Oldies': 'a preset set name in Retro Car Radio',
  'Where the Work Ran': 'a ProjectsDash screen name',
  'Weekly Activity': 'a ProjectsDash screen name',
  'The Spark': "a Witch's Bricks level name",
  'Ruby vs Sapphire': "Witch's Bricks sides",
  'To Do': 'Magic Task Hat column names',
  'In Progress': 'Magic Task Hat column names',
  Done: 'Magic Task Hat column names',
  Small: 'Magic Task Hat onboarding mode, explained in the same line',
  'Magnitude Impact Confidence Effort': 'the words MICE spells out, in the same line',
  // Explained where they appear
  BIG: 'Magic Task Hat onboarding mode, explained in the same line',
  MICE: 'Magic Task Hat score, spelled out in the same line (Magnitude, Impact, Confidence, Effort)',
};

// Files whose text is site copy, checked for terms and possible jargon. Every .tsx file under components/ and
// app/ must be in COPY_FILES or NOT_COPY_FILES, so a new file gets a decision.
export const COPY_FILES: string[] = [
  'components/Hero.tsx',
  'components/XanaduIntro.tsx',
  'components/EngineSection.tsx',
  'components/InPractice.tsx',
  'components/WhyBuilt.tsx',
  'components/Background.tsx',
  'components/Consulting.tsx',
  'components/Footer.tsx',
  'components/ProjectActions.tsx',
  'app/projects/[id]/page.tsx',
  'app/book/page.tsx',
  'app/privacy/page.tsx',
  'app/not-found.tsx',
];
export const NOT_COPY_FILES: Record<string, string> = {
  'app/layout.tsx': 'page frame and metadata, no visible copy',
  'app/page.tsx': 'arranges the home-page sections, no copy of its own',
  'app/jargon/page.tsx': 'the glossary itself',
  'components/Term.tsx': 'the overlay',
  'components/TermText.tsx': 'marks terms in data',
  'components/Nav.tsx': 'labels from lib/constants.ts',
  'components/ProjectCard.tsx': 'shows project data, checked as project copy',
  'components/ProjectGrid.tsx': 'layout only',
  'components/ProjectGallery.tsx': 'screenshot captions from project data',
  'components/ProjectTags.tsx': 'tags are checked as project data',
  'components/HeroShowcase.tsx': 'images only',
  'components/StatCard.tsx': 'labels from lib/constants.ts',
  'components/StructuredData.tsx': 'search-engine data, not shown',
  'components/BookButton.tsx': 'a button',
  'components/CalEmbed.tsx': 'the booking widget',
  'components/YouTubeFacade.tsx': 'the video player',
  'components/ConsentBanner.tsx': 'the cookie notice',
  'components/CookieSettingsButton.tsx': 'a button',
};

// Glossary terms that appear in a copy file but are deliberately not linked there, by file, with the reason.
export const COPY_TERMS_SKIPPED: Record<string, Record<string, string>> = {
  'components/XanaduIntro.tsx': { tests: 'a verb here ("tests it")' },
  'app/projects/[id]/page.tsx': {
    'autonomous-loop': 'linked when the page renders, through TermText (XANADU_LINE_TERMS in lib/projectTerms.ts)',
  },
};
