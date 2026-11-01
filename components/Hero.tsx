import HeroShowcase from './HeroShowcase';
import { PROJECTS } from '@/lib/projects';

export default function Hero() {
  const thumbs = PROJECTS.filter((p) => p.screenshots[0]).map((p) => ({ src: p.screenshots[0]!.src, name: p.name }));

  return (
    <section className="relative py-16 md:py-24">
      <HeroShowcase thumbs={thumbs} />
      <p className="text-xs text-zinc-400 uppercase tracking-widest mb-8">
        Jose Antonio Licon · Pittsburgh, PA
      </p>
      <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-white mb-8">
        Working software in days,<br className="hidden md:inline" />{' '}
        not quarters.
      </h1>
      <p className="text-base text-zinc-400 max-w-xl leading-relaxed mb-10">
        ProjectsDash went from an idea to working software in three days. I build apps and internal tools for
        founders and executives with an AI system I built myself.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#contact-form"
          className="text-sm font-medium bg-white text-gray-900 px-5 py-2 rounded-md hover:bg-zinc-200 transition-colors"
        >
          Tell me what you&apos;re building →
        </a>
        <a
          href="#projects"
          className="text-sm border border-zinc-700 px-5 py-2 rounded-md text-zinc-200 hover:bg-zinc-900 transition-colors"
        >
          See the work
        </a>
        <a
          href="#engine"
          className="text-sm text-zinc-400 px-3 py-2 hover:text-zinc-100 transition-colors"
        >
          The engine →
        </a>
      </div>
    </section>
  );
}
