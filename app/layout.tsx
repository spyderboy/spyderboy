import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { GA_ID, SITE } from '@/lib/constants';
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
      <body className="bg-white text-gray-900 antialiased">
        {children}
        {/* Google Analytics 4 (gtag.js), loaded after hydration. Outbound clicks
            (store badges, Cal.com, promo) come from GA4's enhanced measurement. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
