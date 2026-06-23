import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spyderboy Studio — Jose Antonio Licon',
  description: 'One person. Five very different projects. One engine. Shipping daily.',
  metadataBase: new URL('https://spyderboy.com'),
  openGraph: {
    title: 'Spyderboy Studio — Jose Antonio Licon',
    description: 'One person. Five very different projects. One engine. Shipping daily.',
    url: 'https://spyderboy.com',
    siteName: 'Spyderboy Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@spyderboy',
    title: 'Spyderboy Studio — Jose Antonio Licon',
    description: 'One person. Five very different projects. One engine. Shipping daily.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://spyderboy.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
