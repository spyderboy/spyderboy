import { PROJECTS, getStatusClasses } from '@/lib/projects';
import MagicTaskHatGallery from './MagicTaskHatGallery';

export default function MagicTaskHatCard() {
  const project = PROJECTS.find((p) => p.name === 'Magic Task Hat')!;
  const { bg, text } = getStatusClasses(project.status);

  return (
    <div className="border border-gray-100 hover:border-gray-300 transition-colors rounded-xl p-5">
      <div className="md:flex md:gap-8 md:items-start">
        {/* Left: info */}
        <div className="md:w-56 md:flex-shrink-0">
          <div className="flex items-start justify-between mb-3 md:flex-col md:items-start md:gap-2">
            <h3 className="text-[15px] font-medium text-gray-900">{project.name}</h3>
            <span
              className={`text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap ${bg} ${text}`}
            >
              {project.status}
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{project.oneliner}</p>
          <div className="flex gap-1.5 flex-wrap mt-4">
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

        {/* Right: gallery */}
        <div className="flex-1 mt-5 md:mt-0">
          <MagicTaskHatGallery />
        </div>
      </div>
    </div>
  );
}
