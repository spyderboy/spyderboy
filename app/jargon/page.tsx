import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/constants';
import { CATEGORIES, GLOSSARY, GLOSSARY_BY_ID } from '@/lib/glossary';

export const metadata: Metadata = {
  title: `Jargon, explained — ${SITE.name}`,
  description:
    'Plain-language explanations of the AI and software terms on spyderboy.com: local models, tokens, harnesses, gates, escalation, and more.',
  alternates: { canonical: `${SITE.url}/jargon` },
};

// Every term on the site in one place. Each entry's id is its anchor, so the overlays elsewhere link straight to it.
export default function JargonPage() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <Nav />
      <article className="pt-10 pb-12">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Jargon</p>
        <h1 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4">Jargon, explained</h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
          AI comes with a lot of shorthand. Here is every term used on this site, in plain words. If you have used
          ChatGPT or Claude, you already know enough to read all of it.
        </p>

        <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-[13px] rounded-md border border-gray-200 px-3 py-1.5 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              {c.title}
            </a>
          ))}
        </nav>

        {CATEGORIES.map((c) => {
          const entries = GLOSSARY.filter((e) => e.category === c.id);
          return (
            <section key={c.id} id={c.id} className="mt-14 scroll-mt-6">
              <h2 className="text-xl font-medium text-gray-900 mb-1">{c.title}</h2>
              <p className="text-sm text-gray-500 mb-6">{c.intro}</p>
              <dl className="divide-y divide-gray-100 border-y border-gray-100">
                {entries.map((e) => (
                  <div key={e.id} id={e.id} className="jargon-entry py-6 scroll-mt-6">
                    <dt className="text-[17px] font-medium text-gray-900 mb-2">
                      <a href={`#${e.id}`} className="hover:text-gray-600 transition-colors">
                        {e.term}
                      </a>
                    </dt>
                    <dd className="text-sm text-gray-700 leading-relaxed max-w-2xl">{e.body}</dd>
                    {e.analogy && (
                      <dd className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl border-l-2 border-gray-200 pl-3">
                        <span className="text-gray-500">In everyday terms: </span>
                        {e.analogy}
                      </dd>
                    )}
                    {e.related && e.related.length > 0 && (
                      <dd className="mt-3 text-[13px] text-gray-500">
                        See also:{' '}
                        {e.related.map((r, i) => (
                          <span key={r}>
                            {i > 0 && ', '}
                            <a
                              href={`#${r}`}
                              className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-700"
                            >
                              {GLOSSARY_BY_ID[r]?.term ?? r}
                            </a>
                          </span>
                        ))}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </article>
      <Footer />
    </main>
  );
}
