import Image from 'next/image';
import type { Project } from '@/lib/projects';

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

// A project's CTA (e.g. a time-limited promo, or a jump to a home-page section),
// then the official store badges, then the site link — shared by card and page.
export default function ProjectActions({ project }: { project: Project }) {
  const internal = project.cta?.url.startsWith('#') ?? false;
  const ctaHost = project.cta && !internal ? new URL(project.cta.url).host : null;
  // Skip the plain site button when the CTA already points at the same site.
  const showSite = !!project.liveUrl && ctaHost !== new URL(project.liveUrl).host;
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : null;

  if (!project.cta && !project.appStore && !project.playStore && !showSite) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.cta &&
        (internal ? (
          // Absolute so it also works from /projects/<id>.
          <a href={`/${project.cta.url}`} className={PRIMARY}>{project.cta.label} →</a>
        ) : (
          <External href={project.cta.url} className={PRIMARY}>{project.cta.label} ↗</External>
        ))}
      {project.storeLabel && (project.appStore || project.playStore) && (
        <span className="text-[13px] text-gray-500">{project.storeLabel}</span>
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
  );
}
