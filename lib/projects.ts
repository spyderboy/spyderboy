import generated from './projects.generated.json';

// projects.generated.json is written by projectsdash (scripts/export-spyderboy.ts)
// from each project's PROJECT.md and curated screenshots — edit copy there, not here.

export interface Screenshot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  slug: string; // URL segment for /projects/<slug>, derived from the product name
  name: string;
  status: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  liveUrl: string | null;
  appStore: string | null;
  playStore: string | null;
  storeLabel: string | null;
  cta: { label: string; url: string } | null;
  demoVideo: string | null;
  screenshots: Screenshot[];
}

// "Magic Task Hat" -> "magic-task-hat": readable URLs instead of repo ids like "personalagile".
function slugify(name: string): string {
  return name.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const PROJECTS: Project[] = generated.map((p) => ({ ...p, slug: slugify(p.name) }));

export function getStatusClasses(status: string): { bg: string; text: string } {
  switch (status) {
    case 'Live':
      return { bg: 'bg-green-100', text: 'text-green-800' };
    case 'Beta':
      return { bg: 'bg-amber-100', text: 'text-amber-800' };
    case 'In daily use':
      return { bg: 'bg-purple-100', text: 'text-purple-800' };
    case 'Internal tool':
      return { bg: 'bg-gray-100', text: 'text-gray-700' };
    default:
      return { bg: 'bg-blue-100', text: 'text-blue-800' };
  }
}
