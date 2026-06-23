import { CONTACT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 py-8 flex flex-wrap justify-between items-center gap-4">
      <p className="text-xs text-gray-400">Jose Antonio Licon · Pittsburgh · 2026</p>
      <div className="flex gap-5">
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={CONTACT.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
        >
          @spyderboy
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
        >
          {CONTACT.email}
        </a>
      </div>
    </footer>
  );
}
