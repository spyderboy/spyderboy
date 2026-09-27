import { CONTACT } from '@/lib/constants';
import BookButton from './BookButton';

const OFFERS = [
  {
    who: 'For product leaders',
    title: 'Turn your roadmap into running software',
    body: 'For technical PMs, product leads, and founders. I help you set up a local-first development loop and learn the workflow I use: shape a roadmap with a frontier model, hand the bulk of the build to an autonomous loop, then polish with an agentic assistant. You stop waiting on a queue and start shipping your own ideas.',
  },
  {
    who: 'For dev teams',
    title: 'A measured pilot, not a promise',
    body: 'For engineering leaders. We baseline one team’s cycle time, throughput, and escaped defects, set up the loop on your real backlog — with tests as the gate for “done” — and compare after about six weeks, with a first read at two. You keep the setup and the numbers either way.',
  },
  {
    who: 'For existing codebases',
    title: 'Modernize without the big rewrite',
    body: 'Clean up, extend, port, or re-architect an existing codebase — splitting out services where it actually pays, not because it’s fashionable. We start with an assessment and a test safety net that pins down what the code does today, then the loop modernizes it in small, tested steps, and your code stays on hardware you control. Proven in Dart, TypeScript, Python, and Go; older languages welcome, COBOL included. If yours is new to the system, I’ll prove it out on a small project first, on me.',
  },
];

export default function Consulting() {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Consulting conversation')}`;

  return (
    <section id="contact" className="border-t border-gray-100 py-12 scroll-mt-6">
      <div className="rounded-2xl bg-[#0f0f0f] px-6 py-10 md:px-10">
        <p className="text-xs text-zinc-400 uppercase tracking-widest mb-6">Consulting</p>
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">
          Get more from AI.
        </h2>
        <div className="space-y-4 text-sm text-zinc-400 leading-relaxed max-w-xl">
          <p>
            I turn product people into builders, and help dev teams ship more — and better — with
            AI. ProjectsDash started as an idea one morning — and was working software three days later.
          </p>
          <p>
            I spend most of my time building and traveling, so I&apos;m not looking for a full-time
            role. I take on a few focused engagements at a time.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          {OFFERS.map((o) => (
            <div key={o.who} className="rounded-xl border border-zinc-800 p-5">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">{o.who}</p>
              <h3 className="text-[15px] font-medium text-white leading-snug mb-2">{o.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl mt-6">
          A side effect: most of the work runs on open models on hardware you control, so your AI
          bill grows far more slowly as you add developers.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <BookButton className="text-sm font-medium bg-white text-gray-900 hover:bg-zinc-200 transition-colors px-5 py-2.5 rounded-md">
            Book a 30-minute call
          </BookButton>
          <a href={mailto} className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            or email {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
