import Link from 'next/link';
import { CONTACT } from '@/lib/constants';
import CookieSettingsButton from './CookieSettingsButton';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs text-gray-500">Jose Antonio Licon · Pittsburgh · 2026</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            {CONTACT.email}
          </a>
          <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
            Privacy
          </Link>
          <CookieSettingsButton className="text-xs text-gray-500 hover:text-gray-700 transition-colors" />
        </div>
      </div>
      <p className="text-[10px] text-gray-500 leading-relaxed mt-6">
        Apple and the Apple logo are trademarks of Apple Inc. App Store is a service mark of Apple
        Inc. Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
    </footer>
  );
}
