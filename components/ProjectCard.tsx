import Link from 'next/link';
import { Project, getStatusClasses } from '@/lib/projects';
import ProjectGallery from './ProjectGallery';
import ProjectActions from './ProjectActions';
import ProjectTags from './ProjectTags';

// Compact home-page card; the description, features and demo video live on /projects/<id>.
export default function ProjectCard({ project }: { project: Project }) {
  const { bg, text } = getStatusClasses(project.status);

  return (
    <article id={project.id} className="border border-gray-100 hover:border-gray-300 transition-colors rounded-xl p-5 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="text-[17px] font-medium text-gray-900">
          <Link href={`/projects/${project.slug}`} className="hover:text-gray-600 transition-colors">
            {project.name}
          </Link>
        </h3>
        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap ${bg} ${text}`}>
          {project.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.tagline}</p>

      <ProjectGallery name={project.name} screenshots={project.screenshots} />

      <div className="mt-5">
        <ProjectActions project={project} />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
        <ProjectTags project={project} />
        <Link
          href={`/projects/${project.slug}`}
          className="text-[13px] font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
          aria-label={`${project.name} details`}
        >
          Details →
        </Link>
      </div>
    </article>
  );
}
