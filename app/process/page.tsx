import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Term from '@/components/Term';
import BookButton from '@/components/BookButton';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `How I build software — ${SITE.name}`,
  description:
    'What happens after you hire me: a new product or an existing codebase, then the same autonomous loop that built every project on this site.',
  alternates: { canonical: `${SITE.url}/process` },
};

// public/spyderboy-dev-process.pdf is this page printed (the print: classes lay it out on one sheet). After changing
// the copy, regenerate it with `npm run process-pdf` while `npm run dev` is running.
const PDF = '/spyderboy-dev-process.pdf';

const START = [
  {
    who: 'A new product',
    steps: [
      {
        title: 'What success looks like',
        body: 'We agree on the outcome first: who it’s for, what they need to get done, and how we’ll know it worked. No code yet.',
      },
      {
        title: 'The blueprint',
        body: 'We map every screen and what a person does on it, so the scope is exact before the build starts.',
      },
      {
        title: 'The tools',
        body: (
          <>
            Picked for fast change and for running everywhere you need it, such as <Term id="flutter">Flutter</Term> for
            one app on iPhone, Android and the web.
          </>
        ),
      },
    ],
  },
  {
    who: 'An existing codebase',
    steps: [
      {
        title: 'Read the code',
        body: 'A close read of what you have: how it’s built, where the shortcuts are, and what’s risky to touch.',
      },
      {
        title: 'Check its health',
        body: (
          <>
            What the <Term id="tests">tests</Term> cover today, what the code depends on, and how it behaves in use. Where
            coverage is thin, a <Term id="test-safety-net">test safety net</Term> pins down what it does now.
          </>
        ),
      },
      {
        title: 'A plan before changes',
        body: 'A short list of what to fix and in what order, agreed before anything is touched.',
      },
    ],
  },
];

const ENGINE = [
  {
    title: 'The plan',
    body: (
      <>
        The goal becomes a <Term id="roadmap">roadmap</Term> with milestones.
      </>
    ),
  },
  {
    title: 'Small tasks',
    body: (
      <>
        Each milestone splits into <Term id="task">tasks</Term> small enough to check on their own.
      </>
    ),
  },
  {
    title: 'The queue',
    body: (
      <>
        Xanadu builds them unattended, <Term id="parallel-workers">several at once</Term> when the job is big.
      </>
    ),
  },
  {
    title: 'The watcher',
    body: 'A monitor keeps checking the run’s health and progress, and flags anything that stalls.',
  },
  {
    title: 'Fixes that stick',
    body: (
      <>
        A mistake that repeats becomes a <Term id="rule-promotion">permanent rule</Term>, so later tasks don’t make it.
      </>
    ),
  },
];

const FACTS = [
  {
    value: '3–10 min',
    title: 'per task',
    body: (
      <>
        Most tasks go from start to <Term id="gate">tested and done</Term> in that window. The median is under five
        minutes.
      </>
    ),
  },
  {
    value: 'One Mac',
    title: 'day to day',
    body: (
      <>
        No cloud bill, and your code stays on <Term id="hardware-you-control">hardware you control</Term>.
      </>
    ),
  },
  {
    value: 'Cents a minute',
    title: 'to scale out',
    body: (
      <>
        Rented <Term id="gpu">GPUs</Term>, a few dollars an hour, when a big <Term id="backlog">backlog</Term> has to
        clear fast.
      </>
    ),
  },
];

export default function ProcessPage() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <div className="print:hidden">
        <Nav />
      </div>
      <article className="pt-10 pb-12 print:p-0">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 print:mb-3">
          How I work<span className="hidden print:inline"> · Spyderboy Studio</span>
        </p>
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">From first call to shipped software</h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
          Every engagement starts in one of two places, a new idea or code you already have, and ends in the same{' '}
          <Term id="autonomous-loop">autonomous loop</Term> that built every project on this site. Here’s what happens in
          between.
        </p>
        <p className="mt-4 print:hidden">
          <a
            href={PDF}
            download
            className="text-[13px] font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Download the one-page version (PDF) ↓
          </a>
        </p>

        <section className="mt-12 print:mt-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-normal">Where we start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4">
            {START.map((s) => (
              <div key={s.who} className="rounded-xl border border-gray-100 p-5">
                <h3 className="text-[15px] font-medium text-gray-900 mb-4">{s.who}</h3>
                <ol className="space-y-4">
                  {s.steps.map((step) => (
                    <li key={step.title}>
                      <p className="text-sm font-medium text-gray-900 mb-1">{step.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 print:mt-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-normal">Then the same engine</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 print:grid-cols-5 gap-2">
            {ENGINE.map((step, i) => (
              <li key={step.title} className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-1.5">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-sm font-medium text-gray-900 mb-1">{step.title}</p>
                <p className="text-[13px] print:text-xs text-gray-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-600 mt-4 print:hidden">
            <Link href="/#engine" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
              How the engine works →
            </Link>
          </p>
        </section>

        <section className="mt-12 print:mt-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-normal">What it takes to run</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-4">
            {FACTS.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-100 p-5">
                <p className="text-lg font-medium text-gray-900 leading-none">{f.value}</p>
                <p className="text-xs text-gray-500 mt-1 mb-3">{f.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Task times from Xanadu’s logs of 1,500+ completed tasks.</p>
        </section>

        <p className="hidden print:block mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600">
          Jose Antonio Licon · {CONTACT.email} · spyderboy.com/process
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-12 print:hidden">
          <BookButton className="text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors px-5 py-2.5 rounded-md">
            Book a 30-minute call
          </BookButton>
          <Link href="/#contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            or see the consulting offers
          </Link>
        </div>
      </article>
      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
