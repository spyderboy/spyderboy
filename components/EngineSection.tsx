import Image from 'next/image';
import { ENGINE_STATS, STATS } from '@/lib/constants';
import StatCard from './StatCard';
import InPractice from './InPractice';

// The one place the architecture is explained; the intro and the Xanadu card link here.
const PARTS = [
  {
    title: 'The loop',
    body: 'A planner turns a roadmap into small, testable tasks. An executor writes each change. A validator runs static analysis and the task’s own tests — nothing counts as done until they pass. Failures are classified, fed back into the next attempt, and escalated if they keep coming. All state lives in the roadmap and git, so a run survives being stopped and picks up where it left off.',
  },
  {
    title: 'The ladder',
    body: 'Every task starts on open models, on hardware I control. Day to day, that’s a Mac running a 27B coding model through Apple’s MLX — and in practice it handles nearly everything. For big sprints it scales out to RunPod: one rented GPU or many, each running agents in parallel, with headroom for larger models if a job ever calls for them; most of Galaxican’s 600+ tasks ran that way. Claude sits at the top, reached only when a task has beaten every open-model tier, so frontier compute goes to the problems that genuinely need it. Gemini is the outside voice: I consult it for creative work and as a sanity check on what the loop produces.',
  },
  {
    title: 'Swappable by design',
    body: 'Every rung of the ladder is a setting, not a rewrite. Each tier names a model, and swapping one in — a newer release, a bigger dense model, a small fast one, a coding specialist — is a config change. When a better open model ships, Xanadu gets better the same day.',
  },
  {
    title: 'It learns',
    body: 'A BAD_PATTERNS immune system blocks mistakes it has already seen. A rule-promotion loop turns repeated fixes into permanent rules shared across every machine. And a velocity log of every task shapes what gets planned next.',
  },
];

export default function EngineSection() {
  return (
    <section id="engine" className="border-t border-gray-100 py-12 scroll-mt-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">The engine</p>
      <h2 className="text-2xl font-medium text-gray-900 mb-4">Xanadu</h2>
      <p className="text-sm text-gray-600 leading-relaxed max-w-xl mb-8">
        An autonomous development loop that compresses two weeks of work into two days of
        wall-clock time. Here&apos;s how it works.
      </p>

      <figure className="mb-8">
        <a href="/images/xanadu-architecture.png" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-gray-100 overflow-hidden hover:border-gray-300 transition-colors">
          <Image
            src="/images/xanadu-architecture.png"
            alt="Xanadu architecture: a task backlog runs through four local model tiers, escalating to Claude only when stuck; failures and fixes feed a shared learning store; the same engine scales from a solo Mac to parallel workers to rented cloud GPUs."
            width={1980}
            height={1020}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full h-auto"
          />
        </a>
        <figcaption className="text-xs text-gray-500 mt-2">
          Automation, learning, and scaling run as one loop. Click to enlarge.
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
        {ENGINE_STATS.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
      <p className="text-xs text-gray-500 mb-10">
        From the task logs and git history across {STATS.activeDays30d} of the last 30 days;
        updated {STATS.generatedAt}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {PARTS.map((part) => (
          <div key={part.title}>
            <h3 className="text-[15px] font-medium text-gray-900 mb-2">{part.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{part.body}</p>
          </div>
        ))}
      </div>

      <InPractice />

      <p className="text-sm text-gray-600 mt-10">
        Want a loop like this for your team or your product?{' '}
        <a href="#contact" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
          Get more from AI →
        </a>
      </p>
    </section>
  );
}
