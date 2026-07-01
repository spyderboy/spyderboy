import { PROJECTS, getStatusClasses } from '@/lib/projects';
import RetroCarRadioGallery from './RetroCarRadioGallery';
import YouTubeFacade from './YouTubeFacade';

export default function RetroCarRadioCard() {
  const project = PROJECTS.find((p) => p.name === 'Retro Car Radio')!;
  const { bg, text } = getStatusClasses(project.status);

  return (
    <div className="border border-gray-100 hover:border-gray-300 transition-colors rounded-xl p-5 flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-[15px] font-medium text-gray-900">{project.name}</h3>
        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap ${bg} ${text}`}>
          {project.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{project.oneliner}</p>
      <div className="mt-4">
        <YouTubeFacade videoId="8y1uT_YqkMk" title="Watch the demo" />
      </div>
      <div className="mt-3">
        <RetroCarRadioGallery />
      </div>
      <div className="flex gap-1.5 flex-wrap mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
