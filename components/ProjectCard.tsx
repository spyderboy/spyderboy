import Image from 'next/image';
import { Project, getStatusClasses } from '@/lib/projects';
import ProjectGallery from './ProjectGallery';
import YouTubeFacade from './YouTubeFacade';

const PRIMARY =
  'inline-flex items-center gap-1.5 text-[13px] font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors h-10 px-3.5 rounded-md whitespace-nowrap';
const SECONDARY =
  'inline-flex items-center gap-1.5 text-[13px] font-medium border border-gray-200 text-gray-900 hover:border-gray-400 transition-colors h-10 px-3.5 rounded-md whitespace-nowrap';

function External({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { bg, text } = getStatusClasses(project.status);
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : null;
  // Skip the plain site button when the CTA already points at the same site.
  const ctaHost = project.cta && !project.cta.url.startsWith('#') ? new URL(project.cta.url).host : null;
  const showSite = !!project.liveUrl && ctaHost !== new URL(project.liveUrl).host;
  const hasActions = project.appStore || project.playStore || showSite || project.cta;

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

      {hasActions && (
        <div className="flex flex-wrap items-center gap-3 mt-5">
          {/* A project CTA (e.g. a time-limited promo) leads; store badges follow. */}
          {project.cta &&
            (project.cta.url.startsWith('#') ? (
              <a href={project.cta.url} className={PRIMARY}>{project.cta.label} →</a>
            ) : (
              <External href={project.cta.url} className={PRIMARY}>{project.cta.label} ↗</External>
            ))}
          {project.storeLabel && (project.appStore || project.playStore) && (
            <span className="text-[13px] text-gray-400">{project.storeLabel}</span>
          )}
          {/* Official badges, unaltered (Google's transparent padding trimmed), both 40px tall. */}
          {project.appStore && (
            <External href={project.appStore} className="inline-block">
              <Image src="/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} unoptimized />
            </External>
          )}
          {project.playStore && (
            <External href={project.playStore} className="inline-block">
              <Image src="/badges/google-play.png" alt="Get it on Google Play" width={134} height={40} unoptimized />
            </External>
          )}
          {showSite && (
            <External
              href={project.liveUrl!}
              className={project.cta || project.appStore || project.playStore ? SECONDARY : PRIMARY}
            >
              {host} ↗
            </External>
          )}
        </div>
      )}

      {project.demoVideo && (
        <div className="mt-4">
          <YouTubeFacade videoId={project.demoVideo} title="Watch the demo" />
        </div>
      )}

      {project.tags.length > 0 && (
        <div className="flex gap-1.5 flex-wrap mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
