import ContactForm from './ContactForm';
import BookButton from './BookButton';

// The "what's next" at the end of every reading page: the short form first, a call for those who prefer one.
export default function NextStep({ source, heading = 'Have something you want built?' }: { source: string; heading?: string }) {
  return (
    <section id="next-step" className="mt-16 rounded-xl border border-gray-100 p-6 scroll-mt-6 print:hidden">
      <h2 className="text-lg font-medium text-gray-900 tracking-tight mb-2">{heading}</h2>
      <p className="text-sm text-gray-600 leading-relaxed max-w-xl mb-6">
        Tell me about it in a few lines — an app, an internal tool, a codebase that needs work. I&apos;ll reply with
        how I&apos;d approach it and a rough size.
      </p>
      <ContactForm source={source} />
      <p className="text-xs text-gray-500 mt-6">
        Prefer to talk?{' '}
        <BookButton className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-700">
          Book a 30-minute call
        </BookButton>
      </p>
    </section>
  );
}
