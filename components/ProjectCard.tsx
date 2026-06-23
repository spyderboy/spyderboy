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
      <div className={fullWidth ? 'flex-1' : ''}>
        <div className={`flex ${fullWidth ? 'items-center gap-4' : 'justify-between items-start mb-4'}`}>
          <h3 className="text-[15px] font-medium text-gray-900">{project.name}</h3>
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap ${bg} ${text}`}>
            {project.status}
          </span>
        </div>
        {!fullWidth && (
          <p className="text-sm text-gray-500 leading-relaxed mt-2">{project.oneliner}</p>
        )}
        {fullWidth && (
          <p className="text-sm text-gray-500 leading-relaxed mt-1">{project.oneliner}</p>
        )}
      </div>
      <div className={`flex gap-1.5 flex-wrap ${fullWidth ? 'flex-shrink-0' : 'mt-4'}`}>
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
