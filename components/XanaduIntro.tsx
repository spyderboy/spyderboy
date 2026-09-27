export default function XanaduIntro() {
  return (
    <section className="pb-16 md:pb-24 border-t border-zinc-800 pt-12">
      <h2 className="text-xl font-medium text-white mb-6">
        Xanadu isn&apos;t an AI assistant. It&apos;s an autonomous development loop.
      </h2>
      <div className="space-y-4 text-sm text-zinc-400 leading-relaxed max-w-xl">
        <p>
          Not &ldquo;Antonio uses AI to help him code&rdquo; — an{' '}
          <em className="text-zinc-300 not-italic font-medium">unattended</em> system that plans
          the work, writes the code, tests it, and fixes its own mistakes, then brings back only
          the decisions that need a human.
        </p>
        <p>
          Most people describing AI-assisted development mean Copilot or Cursor: a smarter
          autocomplete with someone at the keyboard. This is categorically different. Nobody is at
          the keyboard.
        </p>
        <p>
          The apps below aren&apos;t just products. They&apos;re the benchmarks.
        </p>
        <p className="text-zinc-300 font-medium">
          That&apos;s Xanadu.{' '}
          <a href="#engine" className="text-zinc-400 font-normal hover:text-zinc-100 transition-colors">
            How it works →
          </a>
        </p>
        <p>
          <a href="#contact" className="text-zinc-200 font-medium underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-300 transition-colors">
            What could it do for your team? →
          </a>
        </p>
      </div>
    </section>
  );
}
