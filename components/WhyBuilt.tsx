export default function WhyBuilt() {
  return (
    <section id="why" className="border-t border-gray-100 py-12">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-10">Why I built it</p>
      <div className="max-w-2xl">
        <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug tracking-tight mb-8">
          I started where everyone starts — Claude, Gemini, the usual suspects. I was amazed at
          what was possible. Then I ran out of tokens.
        </p>
        <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
          <p>
            Most people slow down at that point. I bought a maxed-out MacBook Air and started
            learning local LLMs instead.
          </p>
          <p>
            What began as a workaround turned into something more interesting: a complete
            development loop. Product ideation. SWOT analysis. Backlog generation. Code execution
            across parallel workers. Models that fail over to more capable tiers when a task is
            too hard. Error patterns that get learned and encoded so they don&apos;t burn retries twice.
          </p>
          <p>
            Now I set it running overnight. By morning, the project is mostly done. When I need
            more firepower, I spin up RunPod. A week of backlog in an hour, at a cost that
            doesn&apos;t require a VC.
          </p>
          <p>
            It didn&apos;t replace the craft — my background as a full-stack developer and technical
            product manager is what makes the system work, not what it replaced. I still drive. I
            still take the wheel when the models hit a wall, or the project needs a pivot. Agile
            methodology is the backbone of the whole system — not just a buzzword, but the actual
            structure that keeps five projects moving at once.
          </p>
        </div>
        <blockquote className="mt-8 border-l-2 border-gray-300 pl-5">
          <p className="text-lg font-medium text-gray-900">
            This isn&apos;t a silver bullet. It&apos;s a superpower.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
