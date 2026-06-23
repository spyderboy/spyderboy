export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <p className="text-xs text-zinc-600 uppercase tracking-widest mb-8">
        Jose Antonio Licon · Pittsburgh, PA
      </p>
      <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-white mb-8">
        One person.<br />
        Five very different projects.<br />
        One engine.<br />
        Shipping daily.
      </h1>
      <p className="text-base text-zinc-500 max-w-xl leading-relaxed mb-10">
        I build apps, games, and platforms — powered by an AI development system I built myself.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="text-sm border border-zinc-700 px-5 py-2 rounded-md text-zinc-200 hover:bg-zinc-900 transition-colors"
        >
          See the work
        </a>
        <a
          href="#engine"
          className="text-sm text-zinc-600 px-3 py-2 hover:text-zinc-300 transition-colors"
        >
          The engine →
        </a>
      </div>
    </section>
  );
}
