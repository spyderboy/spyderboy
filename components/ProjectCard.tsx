import { Project, getStatusClasses } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  fullWidth?: boolean;
}

export default function ProjectCard({ project, fullWidth = false }: ProjectCardProps) {
  const { bg, text } = getStatusClasses(project.status);
  return (
    <div
      className={`border border-gray-100 hover:border-gray-300 transition-colors rounded-xl p-5 ${
        fullWidth ? 'flex items-center justify-between gap-8' : 'flex flex-col'
      }`}
    >
      <div className={fullWidth ? 'flex items-center gap-5 flex-1' : ''}>
        <div className={fullWidth ? 'flex-shrink-0' : 'flex justify-between items-start mb-5'}>
          <span className="text-2xl" aria-hidden="true">{project.icon}</span>
          {!fullWidth && (
            <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${bg} ${text}`}>
              {project.status}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-[15px] font-medium text-gray-900 mb-1.5">{project.name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{project.oneliner}</p>
        </div>
      </div>
      <div className={`flex gap-1.5 flex-wrap ${fullWidth ? 'flex-shrink-0 items-center' : 'mt-5'}`}>
        {fullWidth && (
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${bg} ${text} mr-2`}>
            {project.status}
          </span>
        )}
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
