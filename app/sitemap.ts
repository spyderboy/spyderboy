import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { PROJECTS } from '@/lib/projects';

// Home, /book, and one page per project (each with its screenshots for image search).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: PROJECTS.flatMap((p) => p.screenshots.map((s) => `${SITE.url}${s.src}`)),
    },
    { url: `${SITE.url}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    ...PROJECTS.map((p) => ({
      url: `${SITE.url}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: p.screenshots.map((s) => `${SITE.url}${s.src}`),
    })),
  ];
}
