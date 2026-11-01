'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

// The low-commitment way in: three fields, no calendar. Netlify Forms receives it — the blueprint Netlify
// detects at deploy is public/__forms.html, so the two must keep the same form name and field names.
// Analytics gets a "generate_lead" event with the page it came from, never what anyone typed.
type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm({ dark = false, source }: { dark?: boolean; source: string }) {
  const [status, setStatus] = useState<Status>('idle');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'generate_lead', {
        form: 'contact',
        source,
      });
    } catch {
      setStatus('error');
    }
  }

  const label = dark ? 'text-zinc-300' : 'text-gray-700';
  const input = dark
    ? 'w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none'
    : 'w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none';
  const button = dark
    ? 'text-sm font-medium bg-white text-gray-900 hover:bg-zinc-200 disabled:opacity-60 transition-colors px-5 py-2.5 rounded-md'
    : 'text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-60 transition-colors px-5 py-2.5 rounded-md';
  const muted = dark ? 'text-zinc-400' : 'text-gray-500';

  if (status === 'sent') {
    return (
      <p role="status" className={`text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>
        Thanks — got it. I&apos;ll reply by email within two business days.
      </p>
    );
  }

  return (
    <form name="contact" onSubmit={submit} className="space-y-3 max-w-xl">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="source" value={source} />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className={`block text-xs mb-1 ${label}`}>Name</span>
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="block">
          <span className={`block text-xs mb-1 ${label}`}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
      </div>
      <label className="block">
        <span className={`block text-xs mb-1 ${label}`}>What are you trying to build, or what&apos;s stuck?</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A few lines is plenty. Links to a spec or your code are welcome."
          className={input}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className={button}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        <span className={`text-xs ${muted}`}>No call needed. I reply by email within two business days.</span>
      </div>
      {status === 'error' && (
        <p role="alert" className="text-sm text-red-400">
          That didn&apos;t go through. Please email{' '}
          <a href={`mailto:${CONTACT.email}`} className="underline">
            {CONTACT.email}
          </a>{' '}
          instead.
        </p>
      )}
    </form>
  );
}
