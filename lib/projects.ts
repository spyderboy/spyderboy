import generated from './projects.generated.json';

// projects.generated.json is written by projectsdash (scripts/export-spyderboy.ts)
// from each project's PROJECT.md and curated screenshots — edit copy there, not here.

export interface Screenshot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  liveUrl: string | null;
  demoVideo: string | null;
  screenshots: Screenshot[];
}

export const PROJECTS: Project[] = generated;

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
