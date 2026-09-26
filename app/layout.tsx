import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const shareImage = { url: SITE.avatar, width: 460, height: 460, alt: 'Jose Antonio Licon (Spyderboy)' };

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    images: [shareImage],
  },
  twitter: {
    card: 'summary',
    creator: '@spyderboy',
    title: SITE.title,
    description: SITE.description,
    images: [shareImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
