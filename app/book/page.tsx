import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CalEmbed from '@/components/CalEmbed';
import { CAL_URL, CONTACT, SITE } from '@/lib/constants';

// Shareable booking page (email signatures, LinkedIn, proposals). On the home
// page, "Book a call" opens the same calendar as a popup instead.

const title = `Book a call — ${SITE.name}`;
const description =
  'Book a 30-minute consulting conversation with Jose Antonio Licon about LLM token costs, local-first AI development loops, and product architecture.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/book` },
  openGraph: { title, description, url: `${SITE.url}/book`, siteName: SITE.name, type: 'website', images: [SITE.avatar] },
  twitter: { card: 'summary', title, description, images: [SITE.avatar] },
};

export default function BookPage() {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Consulting conversation')}`;

  return (
    <main className="max-w-3xl mx-auto px-6">
      <Nav />
      <section className="pt-10 pb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Consulting</p>
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Book a 30-minute call.</h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
          Architecture, LLM token costs, local-first AI development loops, or bridging product
          management and autonomous engineering. Pick a time that works — or{' '}
          <a href={mailto} className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
            email {CONTACT.email}
          </a>
          .
        </p>
      </section>

      <section className="pb-8">
        <CalEmbed />
        <p className="text-xs text-gray-500 mt-3">
          Calendar not loading?{' '}
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
            Book on cal.com
          </a>
          . Or{' '}
          <Link href="/" className="underline hover:text-gray-900">
            see the work first
          </Link>
          .
        </p>
      </section>

      <Footer />
    </main>
  );
}
