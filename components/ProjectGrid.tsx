import { PROJECTS } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const mainProjects = PROJECTS.slice(0, 4);
  const moonshot = PROJECTS[4];
  return (
    <section id="projects" className="border-t border-gray-100 py-12">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {mainProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
        {moonshot && (
          <div className="md:col-span-2">
            <ProjectCard project={moonshot} fullWidth />
          </div>
        )}
      </div>
    </section>
  );
}
