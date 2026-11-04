import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Term from '@/components/Term';
import NextStep from '@/components/NextStep';
import { SITE } from '@/lib/constants';

// The entry offer: one week, $5,000, framed as a demonstration — real backlog items done in the client's own code.
// Linked from the home page's Consulting section; the page to send people to from outreach and posts.

const title = `Real results in your repo by Friday — ${SITE.name}`;
const description =
  'What can $5,000 get you? One week: we sort your backlog together, I work through the top of it, and you get tested code in your own repo by Friday.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/backlog` },
  openGraph: { title, description, url: `${SITE.url}/backlog`, siteName: SITE.name, type: 'website', images: [SITE.avatar] },
  twitter: { card: 'summary', title, description, images: [SITE.avatar] },
};

const STEPS = [
  {
    title: 'A verdict on your backlog',
    body: (
      <>
        We go through your <Term id="backlog">backlog</Term> together, whatever state it’s in, and mark each item build,
        cut or defer, with a one-line reason. Most backlogs hold work that shouldn’t be built at all.
      </>
    ),
  },
  {
    title: 'The top of it, done',
    body: (
      <>
        I work through the top of your backlog, as far as the week goes. Items are kept small enough to deliver, built in
        your own code, each with <Term id="tests">tests</Term> that prove it works, and reviewed by me before it reaches
        you.
      </>
    ),
  },
  {
    title: 'The numbers',
    body: 'What was built, how much passed its tests on the first try, how long it took, and what your team had estimated for the same work.',
  },
  {
    title: 'What a month would look like',
    body: 'If you like what you see, we keep going at a rate based on what the week showed. If not, you keep everything and we part friends.',
  },
];

export default function BacklogPage() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <Nav />

      <section className="pt-10 pb-10">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">What can $5,000 get you?</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
          Real results in your repo by Friday.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">Give me one week and your backlog. I’ll show you.</p>
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
        <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-normal">In one week you get</h2>
        <ol className="space-y-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="text-sm font-medium text-gray-400 w-5 shrink-0">{i + 1}</span>
              <div>
                <h3 className="text-[15px] font-medium text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-gray-100 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-[15px] font-medium text-gray-900 mb-2">No codebase yet? That’s fine.</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Access to your code is the fastest start. If you’re building something new, user stories are enough: you
            get working software built from them, in a repository that’s yours. I can help you write good ones, too.
          </p>
        </div>
        <div>
          <h2 className="text-[15px] font-medium text-gray-900 mb-2">Your code stays private</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            It is never sent to an AI company like OpenAI or Anthropic. The work runs on{' '}
            <Term id="open-model">open models</Term> on my own machine. Nothing is used to train anyone’s AI.
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

      <section className="border-t border-gray-100 py-10">
        <p className="text-2xl font-medium tracking-tight text-gray-900">One week. $5,000.</p>
        <p className="text-sm text-gray-600 mt-2">
          Half to start, half on delivery. The week starts once I have your code or your user stories.
        </p>
      </section>

      <NextStep source="backlog" heading="Where is your backlog stuck?" />

      <div className="pb-8" />
      <Footer />
    </main>
  );
}
