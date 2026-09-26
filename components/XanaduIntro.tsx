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
          It runs on open models, on hardware I control. Day to day, that&apos;s a Mac running a
          27B coding model through Apple&apos;s MLX. When a roadmap is big, it bursts to RunPod:
          a rented GPU running parallel workers that clear hundreds of tasks in a sprint. Claude
          sits at the top of the ladder, reached only when a task has beaten every local tier —
          so frontier compute goes to the problems that genuinely need it.
        </p>
        <p>
          Every rung of that ladder is a setting, not a rewrite. Each tier names a model, and
          swapping one in — a newer release, a bigger dense model, a small fast one, a coding
          specialist — is a config change. When a better open model ships, Xanadu gets better
          the same day.
        </p>
        <p>
          Underneath, a BAD_PATTERNS immune system blocks mistakes it has already seen, a rule
          promotion loop turns repeated fixes into permanent rules shared across every machine,
          and a velocity feedback loop shapes what gets planned next.
        </p>
        <p>
          The apps it ships aren&apos;t just products. They&apos;re the benchmarks. Galaxican at
          600+ completed tasks — most of them run in parallel on a RunPod GPU — is a live proof of
          concept for the system itself.
        </p>
        <p>
          Most people describing AI-assisted development mean Copilot or Cursor. This is
          categorically different — an{' '}
          <em className="text-zinc-300 not-italic font-medium">unattended</em> system with a
          planner, an executor, a validator, error classification, and a rule promotion loop.
        </p>
        <p className="text-zinc-300 font-medium">That&apos;s Xanadu.</p>
      </div>
    </section>
  );
}
