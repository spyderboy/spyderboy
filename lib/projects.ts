export type ProjectStatus = 'Live' | 'Coming soon' | 'In development' | 'Moonshot';

export interface Project {
  name: string;
  status: ProjectStatus;
  oneliner: string;
  tags: string[];
  icon: string;
}

export function getStatusClasses(status: ProjectStatus): { bg: string; text: string } {
  switch (status) {
    case 'Live':
      return { bg: 'bg-green-100', text: 'text-green-800' };
    case 'Coming soon':
      return { bg: 'bg-amber-100', text: 'text-amber-800' };
    case 'In development':
      return { bg: 'bg-blue-100', text: 'text-blue-800' };
    case 'Moonshot':
      return { bg: 'bg-purple-100', text: 'text-purple-800' };
  }
}

export const PROJECTS: Project[] = [
  {
    name: 'Retro Car Radio',
    status: 'Live',
    oneliner: 'Internet radio with a classic car preset interface. Old school vibes, a world of streaming.',
    tags: ['iOS', 'Android', 'Flutter'],
    icon: '📻',
  },
  {
    name: 'Galaxain',
    status: 'Coming soon',
    oneliner: 'A space strategy game where stars produce resources, fleets capture territory, and one more turn becomes five.',
    tags: ['iOS', 'Android', 'Flutter/Flame'],
    icon: '🚀',
  },
  {
    name: 'Magic Task Hat',
    status: 'In development',
    oneliner: 'Personal productivity powered by Agile principles. Your backlog, your sprints, your rules.',
    tags: ['Flutter', 'Firebase', 'GCP'],
    icon: '🪄',
  },
  {
    name: 'Estate Wise',
    status: 'In development',
    oneliner: 'Property management for 8 real buildings and 29 real units. Built because nothing else fit — and it actually works.',
    tags: ['Next.js', 'Firebase', 'GCP'],
    icon: '🏠',
  },
  {
    name: 'Podomus',
    status: 'Moonshot',
    oneliner: 'Free podcast hosting on GCP free tiers. Start your show. Zero cost, zero excuses.',
    tags: ['GCP', 'Firebase'],
    icon: '🎙️',
  },
];
