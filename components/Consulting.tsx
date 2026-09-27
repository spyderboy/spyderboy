import { CONTACT } from '@/lib/constants';
import BookButton from './BookButton';

export default function Consulting() {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Consulting conversation')}`;

  return (
    <section id="contact" className="border-t border-gray-100 py-12 scroll-mt-6">
      <div className="rounded-2xl bg-[#0f0f0f] px-6 py-10 md:px-10">
        <p className="text-xs text-zinc-400 uppercase tracking-widest mb-6">Consulting</p>
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">
          Let&apos;s talk architecture.
        </h2>
        <div className="space-y-4 text-sm text-zinc-400 leading-relaxed max-w-xl">
          <p>
            I spend most of my time building systems, shipping apps, and traveling. I&apos;m not
            looking for a full-time role, but I&apos;m always open to interesting consulting
            conversations.
          </p>
          <p>
            If your team is hitting a wall with LLM token costs, trying to build local-first AI
            development loops, or needs someone who can bridge product management and autonomous
            engineering, we should talk.
          </p>
        </div>
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
