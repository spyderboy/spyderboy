import Link from 'next/link';

// Two measured cases (git history + Xanadu task logs): ProjectsDash for speed,
// Galaxican for scale. Keep the numbers traceable to those sources.
const CASES = [
  {
    href: '/projects/projectsdash',
    project: 'ProjectsDash',
    title: 'From an idea to a working tool in under three days',
    body: 'I woke up with the idea, had a quick chat with Claude to shape a roadmap, and pointed Xanadu at it. On a single Mac, with a local model and no cloud bill, it worked through the roadmap largely unattended. Then I polished the rough edges with Claude.',
    facts: [
      ['2.75 days', 'first commit to finished roadmap'],
      ['49 of 49', 'roadmap tasks done — 35 by Xanadu'],
      ['4,455', 'lines of TypeScript, with test suites'],
      ['$0', 'cloud compute: one laptop'],
    ],
  },
  {
    href: '/projects/galaxican',
    project: 'Galaxican',
    title: 'Scaling out when the roadmap is big',
    body: 'Galaxican is where Xanadu was proven and hardened. For its biggest push, the same loop scaled out to parallel workers on a rented GPU — capacity that costs a few dollars an hour — and the game shipped to both app stores.',
    facts: [
      ['626', 'tasks completed autonomously'],
      ['483', 'passed on the first attempt'],
      ['2 weeks', 'for the parallel sprint'],
      ['2 stores', 'App Store and Google Play'],
    ],
  },
];

export default function InPractice() {
  return (
    <div className="mt-12">
      <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-normal">In practice</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CASES.map((c) => (
          <article key={c.project} className="rounded-xl border border-gray-100 p-5 flex flex-col">
            <p className="text-xs text-gray-500 mb-1">{c.project}</p>
            <h4 className="text-[15px] font-medium text-gray-900 leading-snug mb-3">{c.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{c.body}</p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5">
              {c.facts.map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-lg font-medium text-gray-900 leading-none">{value}</dd>
                  <dd className="text-xs text-gray-500 mt-1">{label}</dd>
                </div>
              ))}
            </dl>
            <Link href={c.href} className="mt-auto text-[13px] font-medium text-gray-900 hover:text-gray-600 transition-colors">
              See {c.project} →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
