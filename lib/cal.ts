'use client';

import { CAL_LINK } from '@/lib/constants';

// Cal.com embed API (from the official embed snippet). Calls made before
// embed.js finishes loading are queued and replayed, so callers never wait.

const NAMESPACE = '30min';
const CONFIG = { layout: 'month_view' };

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns: Record<string, (...args: unknown[]) => void>;
  q?: unknown[];
  config?: Record<string, unknown>;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

let initialized = false;

function installLoader() {
  (function (C: Window, A: string, L: string) {
    const p = (a: { q: unknown[] }, ar: unknown) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      (function (...ar: unknown[]) {
        const cal = C.Cal!;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = Object.assign((...args: unknown[]) => p(api, args), { q: [] as unknown[] });
          const namespace = ar[1];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace] as unknown as { q: unknown[] }, ar);
            p(cal as unknown as { q: unknown[] }, ['initNamespace', namespace]);
          } else p(cal as unknown as { q: unknown[] }, ar);
          return;
        }
        p(cal as unknown as { q: unknown[] }, ar);
      } as CalApi);
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
}

/** Load embed.js and set up the namespace (idempotent; cheap to call on hover). */
export function ensureCal(): NonNullable<Window['Cal']>['ns'][string] {
  if (!initialized) {
    installLoader();
    const Cal = window.Cal!;
    Cal('init', NAMESPACE, { origin: 'https://app.cal.com' });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns[NAMESPACE]!('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    initialized = true;
  }
  return window.Cal!.ns[NAMESPACE]!;
}

/** Open the booking popup over the current page. */
export function openCalModal() {
  ensureCal()('modal', { calLink: CAL_LINK, config: CONFIG });
}

/** Render the calendar inline into the element with this id (the /book page). */
export function renderCalInline(elementId: string) {
  ensureCal()('inline', {
    elementOrSelector: `#${elementId}`,
    config: { ...CONFIG, useSlotsViewOnSmallScreen: 'true' },
    calLink: CAL_LINK,
  });
}
