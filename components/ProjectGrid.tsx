import { PROJECTS } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import RetroCarRadioCard from './RetroCarRadioCard';
import MagicTaskHatCard from './MagicTaskHatCard';
import EstateWiseCard from './EstateWiseCard';
import PodomusCard from './PodomusCard';

export default function ProjectGrid() {
  const galaxain = PROJECTS[1];

  return (
    <section id="projects" className="border-t border-gray-100 py-12">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <RetroCarRadioCard />
        <ProjectCard project={galaxain} />
        <div className="md:col-span-2">
          <MagicTaskHatCard />
        </div>
        <EstateWiseCard />
        <PodomusCard />
      </div>
    </section>
  );
}
