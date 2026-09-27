import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectActions from '@/components/ProjectActions';
import YouTubeFacade from '@/components/YouTubeFacade';
import { PROJECTS, getStatusClasses } from '@/lib/projects';
import { SITE } from '@/lib/constants';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.slug }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.slug === id);
  if (!project) return {};
  const title = `${project.name} — ${SITE.name}`;
  const url = `${SITE.url}/projects/${project.slug}`;
  const image = project.screenshots[0] ? `${SITE.url}${project.screenshots[0].src}` : SITE.avatar;
  return {
    title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: { title, description: project.tagline, url, siteName: SITE.name, type: 'website', images: [image] },
    twitter: { card: 'summary_large_image', title, description: project.tagline, images: [image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === id);
  if (index === -1) notFound();
  const project = PROJECTS[index]!;
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]!;
  const next = PROJECTS[(index + 1) % PROJECTS.length]!;
  const { bg, text } = getStatusClasses(project.status);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description || project.tagline,
    url: project.liveUrl ?? `${SITE.url}/projects/${project.slug}`,
    ...(project.screenshots[0] && { image: `${SITE.url}${project.screenshots[0].src}` }),
    ...((project.appStore || project.playStore) && { sameAs: [project.appStore, project.playStore].filter(Boolean) }),
    author: { '@type': 'Person', name: 'Jose Antonio Licon', url: SITE.url },
  };

  return (
    <main className="max-w-3xl mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <p className="pt-6 mb-8">
        <Link href="/#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          ← All projects
        </Link>
      </p>

      <article className="pb-12">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">{project.name}</h1>
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap mt-2 ${bg} ${text}`}>
            {project.status}
          </span>
        </div>
        <p className="text-base text-gray-600 leading-relaxed mb-6">{project.tagline}</p>

        <ProjectGallery name={project.name} screenshots={project.screenshots} />

        {project.description && (
          <p className="text-[15px] text-gray-700 leading-relaxed mt-8">{project.description}</p>
        )}

        {project.features.length > 0 && (
          <>
            <h2 className="text-xs text-gray-500 uppercase tracking-widest mt-10 mb-4 font-normal">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-gray-700 leading-snug">
                  <span aria-hidden className="text-gray-400 select-none">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-8">
          <ProjectActions project={project} />
        </div>

        {project.demoVideo && (
          <div className="mt-8">
            <YouTubeFacade videoId={project.demoVideo} title="Watch the demo" />
          </div>
        )}

        {project.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mt-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] text-gray-600 bg-gray-50 px-2 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      <nav aria-label="More projects" className="border-t border-gray-100 py-8 flex justify-between gap-4 text-sm">
        <Link href={`/projects/${prev.slug}`} className="text-gray-600 hover:text-gray-900 transition-colors">
          ← {prev.name}
        </Link>
        <Link href={`/projects/${next.slug}`} className="text-gray-600 hover:text-gray-900 transition-colors text-right">
          {next.name} →
        </Link>
      </nav>

      <Footer />
    </main>
  );
}
