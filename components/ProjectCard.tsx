import { Project, getStatusClasses } from '@/lib/projects';
import ProjectGallery from './ProjectGallery';
import YouTubeFacade from './YouTubeFacade';

export default function ProjectCard({ project }: { project: Project }) {
  const { bg, text } = getStatusClasses(project.status);
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : null;

  return (
    <article id={project.id} className="border border-gray-100 hover:border-gray-300 transition-colors rounded-xl p-5 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="text-[17px] font-medium text-gray-900">{project.name}</h3>
        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap ${bg} ${text}`}>
          {project.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.tagline}</p>

      <ProjectGallery name={project.name} screenshots={project.screenshots} />

      {project.description && (
        <p className="text-sm text-gray-500 leading-relaxed mt-4">{project.description}</p>
      )}

      {project.features.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-[13px] text-gray-600 leading-snug">
              <span aria-hidden className="text-gray-300 select-none">—</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {project.demoVideo && (
        <div className="mt-4">
          <YouTubeFacade videoId={project.demoVideo} title="Watch the demo" />
        </div>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
        <div className="flex gap-1.5 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            {host} ↗
          </a>
        )}
      </div>
    </article>
  );
}
