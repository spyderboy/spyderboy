import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Term from '@/components/Term';
import NextStep from '@/components/NextStep';
import { SITE } from '@/lib/constants';

// The entry offer: two weeks, a fixed price, a verdict on the backlog and the top of it built. Linked from the home
// page's Consulting section; the one to send people to from outreach and posts.

const title = `Your backlog, cut down and shipped — ${SITE.name}`;
const description =
  'Two weeks, $5,000: every backlog item marked build, cut or defer, the top of it built and tested in your repository, and the numbers to judge it by.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/backlog` },
  openGraph: { title, description, url: `${SITE.url}/backlog`, siteName: SITE.name, type: 'website', images: [SITE.avatar] },
  twitter: { card: 'summary', title, description, images: [SITE.avatar] },
};

const STEPS = [
  {
    when: 'Days 1–3',
    title: 'A verdict on your backlog',
    body: (
      <>
        Every item in your <Term id="backlog">backlog</Term> marked build, cut or defer, each with a one-line reason.
        Most backlogs hold work that shouldn’t be built at all. Finding it can be worth the fee on its own.
      </>
    ),
  },
  {
    when: 'Days 4–12',
    title: 'The top of it, built',
    body: (
      <>
        Working code delivered to your repository, each change with <Term id="tests">tests</Term> that prove it works,
        and reviewed by me before it reaches you. You see progress every day.
      </>
    ),
  },
  {
    when: 'Day 14',
    title: 'The numbers',
    body: 'What was built, how much of it passed its tests on the first try, the hours it took, and what your team had estimated for the same work.',
  },
  {
    when: 'After',
    title: 'Your call',
    body: 'Keep me on, take the plan in-house, or stop there. You keep the code and the plan either way.',
  },
];

export default function BacklogPage() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <Nav />

      <section className="pt-10 pb-10">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Two weeks · $5,000</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
          Your backlog, cut down and shipped.
        </h1>
        <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed max-w-xl">
          <p>
            Most teams aren’t short of ideas. They’re short of someone who can say which ones matter, and then get
            them done.
          </p>
          <p>
            I do both: I decide what’s worth building, and I run a development system that builds it while I keep
            deciding.
          </p>
        </div>
        <a
          href="#next-step"
          className="inline-block mt-8 text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors px-5 py-2.5 rounded-md"
        >
          Tell me about your backlog →
        </a>
      </section>

      <section className="border-t border-gray-100 py-10">
        <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-normal">In two weeks you get</h2>
        <ol className="space-y-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="text-sm font-medium text-gray-400 w-5 shrink-0">{i + 1}</span>
              <div>
                <p className="text-xs text-gray-500 mb-1">{s.when}</p>
                <h3 className="text-[15px] font-medium text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-gray-100 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-[15px] font-medium text-gray-900 mb-2">Your code stays private</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            It is never sent to an AI company like OpenAI or Anthropic. The work runs on{' '}
            <Term id="open-model">open models</Term> on my own machine. If you want results faster, I can add private
            rented <Term id="gpu">GPUs</Term>, only if you agree. Nothing is used to train anyone’s AI.
          </p>
        </div>
        <div>
          <h2 className="text-[15px] font-medium text-gray-900 mb-2">You don’t take my word for it</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every change comes with tests that prove it works, and you see every change before it’s yours. The numbers
            on day 14 come from the work itself, not from a slide.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 py-10">
        <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-normal">Built this way</h2>
        <ul className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-xl">
          <li>
            <Link href="/projects/wtf-tracker" className="font-medium text-gray-900 hover:text-gray-600">
              WTF Tracker
            </Link>
            : from a written plan to a working app in 2 days. 73 tasks, 93% right on the first try.
          </li>
          <li>
            <Link href="/estatewise" className="font-medium text-gray-900 hover:text-gray-600">
              EstateWise
            </Link>
            : a rental-management app for our own use, not for sale. 421 tasks, built largely unattended, much of it
            overnight.
          </li>
        </ul>
        <p className="text-sm text-gray-600 mt-6">
          What happens step by step:{' '}
          <Link href="/process" className="font-medium text-gray-900 hover:text-gray-600">
            how I build software →
          </Link>
        </p>
      </section>

      <NextStep source="backlog" heading="Where is your backlog stuck?" />

      <div className="pb-8" />
      <Footer />
    </main>
  );
}
