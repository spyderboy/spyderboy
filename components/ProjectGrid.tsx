import { PROJECTS } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  return (
    <section id="projects" className="border-t border-gray-100 py-12">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Projects</p>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
