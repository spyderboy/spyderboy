import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { PROJECTS } from '@/lib/projects';

// One page; list the project screenshots with it so they can show up in image search.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: PROJECTS.flatMap((p) => p.screenshots.map((s) => `${SITE.url}${s.src}`)),
    },
  ];
}
