export default function XanaduIntro() {
  return (
    <section className="pb-16 md:pb-24 border-t border-zinc-800 pt-12">
      <h2 className="text-xl font-medium text-white mb-6">
        Xanadu isn&apos;t an AI assistant. It&apos;s an autonomous development loop.
      </h2>
      <div className="space-y-4 text-sm text-zinc-400 leading-relaxed max-w-xl">
        <p>
          Not &ldquo;Tony uses AI to help him code&rdquo; — but a tiered, self-correcting,
          rule-learning execution system that compresses two weeks of work into two days of
          wall-clock time.
        </p>
        <p>
          It runs a BAD_PATTERNS immune system that learns from every mistake. A velocity
          feedback loop that shapes what gets built next. A cost cascade that starts with a
          local 7B model, escalates to 32B, and only reaches Claude or Gemini when genuinely
          stuck — so it&apos;s fast, cheap, and doesn&apos;t waste frontier compute on problems
          it can already solve.
        </p>
        <p>
          The apps it ships aren&apos;t just products. They&apos;re the benchmarks. Galaxian at
          535 completed tasks is a live proof of concept for the system itself.
        </p>
        <p>
          What you&apos;re watching in the video above isn&apos;t a demo of AI-assisted
          development. Most people describing that mean Copilot or Cursor. This is categorically
          different — an <em className="text-zinc-300 not-italic font-medium">unattended</em>{' '}
          system with a planner, an executor, a validator, error classification, and a rule
          promotion loop.
        </p>
        <p className="text-zinc-300 font-medium">That&apos;s Xanadu.</p>
      </div>
    </section>
  );
}
