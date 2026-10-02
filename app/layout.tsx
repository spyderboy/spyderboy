import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { CONSENT_KEY, CONSENT_REGIONS, GA_ID, SITE } from '@/lib/constants';
import ConsentBanner from '@/components/ConsentBanner';
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
        <ConsentBanner />
        {/* Google Analytics 4 with region-specific consent mode: in the EU/EEA, UK
            and Switzerland it stays cookieless until the visitor allows it; elsewhere
            analytics is on by default and the banner can turn it off. A stored choice
            (either way) always wins. Advertising storage is denied everywhere.
            Outbound clicks come from GA4's enhanced measurement. */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', region: ${JSON.stringify(CONSENT_REGIONS)}});
gtag('consent', 'default', {analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
try { var c = localStorage.getItem('${CONSENT_KEY}'); if (c === 'granted' || c === 'denied') gtag('consent', 'update', {analytics_storage: c}); } catch (e) {}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      </body>
    </html>
  );
}
