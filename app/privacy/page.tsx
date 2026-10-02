import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy — ${SITE.name}`,
  description: 'What spyderboy.com collects, why, and how to opt out.',
  alternates: { canonical: `${SITE.url}/privacy` },
};

const UPDATED = '2026-09-27';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-[15px] font-medium text-gray-900 mb-2">{title}</h2>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <Nav />
      <article className="pt-10 pb-12 max-w-2xl">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Privacy</p>
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Privacy</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          spyderboy.com is the personal site of Jose Antonio Licon (Spyderboy Studio). It collects
          as little as it can. Last updated {UPDATED}.
        </p>

        <Section title="Analytics">
          <p>
            The site uses Google Analytics 4 to count visits and see which projects and links people
            use. If you visit from the EU, EEA, UK or Switzerland, it runs in Google&apos;s consent mode
            without analytics cookies until you choose &ldquo;Allow&rdquo;, sending only basic,
            cookieless signals. Elsewhere, analytics is on by default and you can turn it off with
            &ldquo;Decline&rdquo;. When it&apos;s on, Google Analytics sets first-party cookies to
            recognize repeat visits. Advertising features are off everywhere.
          </p>
          <p>
            You can change your choice at any time: <CookieSettingsButton className="underline hover:text-gray-900" />.
            Google&apos;s own practices are described in its{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
              privacy policy
            </a>
            .
          </p>
        </Section>

        <Section title="Booking a call">
          <p>
            &ldquo;Book a call&rdquo; opens a scheduler from Cal.com, which loads only when you use
            it. Anything you enter there (your name, email, and notes) goes to Cal.com to schedule
            the meeting and to me so I can prepare for it. See{' '}
            <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
              Cal.com&apos;s privacy policy
            </a>
            .
          </p>
        </Section>

        <Section title="Videos and images">
          <p>
            Demo videos use YouTube&apos;s privacy-enhanced mode and don&apos;t load the player
            until you click play; the preview image comes from YouTube&apos;s image servers. The
            site&apos;s share image is served by GitHub.
          </p>
        </Section>

        <Section title="Email and hosting">
          <p>
            If you email {CONTACT.email}, I use your message only to reply. The site is hosted on
            Netlify, which keeps standard server logs (such as IP address and pages requested) to
            run and secure the service.
          </p>
        </Section>

        <Section title="What I don't do">
          <p>No advertising, no selling or sharing your information, and no account or sign-up on this site.</p>
        </Section>

        <Section title="Questions or requests">
          <p>
            To ask what I hold about you or to have it deleted, email{' '}
            <a href={`mailto:${CONTACT.email}`} className="underline hover:text-gray-900">
              {CONTACT.email}
            </a>
            .
          </p>
        </Section>

        <p className="mt-12">
          <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            ← Back to spyderboy.com
          </Link>
        </p>
      </article>
      <Footer />
    </main>
  );
}
