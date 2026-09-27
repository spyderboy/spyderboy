'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONSENT_KEY } from '@/lib/constants';

export const OPEN_CONSENT_EVENT = 'open-consent';

type Gtag = (...args: unknown[]) => void;

// Analytics runs cookieless (consent mode "denied") until the visitor accepts.
// The choice is remembered; "Cookie settings" in the footer reopens this.
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setOpen(true);
    } catch {
      // storage blocked: leave analytics cookieless and don't nag
    }
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choose = (choice: 'granted' | 'denied') => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // not persisted; applies to this page view only
    }
    (window as unknown as { gtag?: Gtag }).gtag?.('consent', 'update', { analytics_storage: choice });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 p-4 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white shadow-lg px-5 py-4 flex flex-wrap items-center gap-4">
        <p className="flex-1 min-w-[220px] text-sm text-gray-700 leading-relaxed">
          I use Google Analytics to see which projects people look at. It only sets cookies if
          you allow it.{' '}
          <Link href="/privacy" className="underline hover:text-gray-900">
            Privacy
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => choose('denied')}
            className="text-sm font-medium border border-gray-300 text-gray-900 hover:border-gray-500 px-4 py-2 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose('granted')}
            className="text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}
