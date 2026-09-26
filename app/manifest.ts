import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Spyderboy',
    description: SITE.description,
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0f0f0f',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
