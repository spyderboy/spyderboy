'use client';

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { GLOSSARY_BY_ID } from '@/lib/glossary';

// A piece of jargon in the copy. Click or tap opens its short definition in an overlay, anchored to the word on
// wide screens and as a sheet along the bottom on phones. Without JavaScript it is a plain link to its entry on
// /jargon. Mark only a term's first appearance in a section, so the copy doesn't turn into a field of underlines.
export default function Term({
  id,
  children,
  dark = false,
  className,
}: {
  id: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string; // replaces the dotted underline, e.g. for a tag chip
}) {
  const entry = GLOSSARY_BY_ID[id];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; above: boolean } | null>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) trigger.current?.focus();
  }, []);

  // Place the overlay under the word (above it when there's no room below), kept inside the viewport.
  const place = useCallback(() => {
    const t = trigger.current?.getBoundingClientRect();
    const p = panel.current?.getBoundingClientRect();
    if (!t || !p) return;
    const margin = 12;
    const left = Math.min(Math.max(margin, t.left + t.width / 2 - p.width / 2), window.innerWidth - p.width - margin);
    const above = t.bottom + 8 + p.height > window.innerHeight - margin && t.top - 8 - p.height > margin;
    setPos({ left, top: above ? t.top - 8 - p.height : t.bottom + 8, above });
  }, []);

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true);
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panel.current?.contains(target) && !trigger.current?.contains(target)) close(false);
    };
    const onMove = () => place();
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onMove);
    window.addEventListener('scroll', onMove, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onMove);
      window.removeEventListener('scroll', onMove, true);
    };
  }, [open, close, place]);

  if (!entry) return <>{children}</>;

  const underline = dark
    ? 'decoration-zinc-500 hover:decoration-zinc-200'
    : 'decoration-gray-400 hover:decoration-gray-800';

  return (
    <>
      <a
        ref={trigger}
        href={`/jargon#${entry.id}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={(e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey) return; // a deliberate new-tab click still opens the page
          e.preventDefault();
          setOpen((o) => !o);
        }}
        className={
          className ?? `underline decoration-dotted underline-offset-4 cursor-help transition-colors ${underline}`
        }
      >
        {children}
      </a>
      {open &&
        createPortal(
          <div
            ref={panel}
            id={panelId}
            role="dialog"
            aria-label={entry.term}
            tabIndex={-1}
            style={pos ? { left: pos.left, top: pos.top } : { visibility: 'hidden', left: 0, top: 0 }}
            className="fixed z-50 w-[min(22rem,calc(100vw-1.5rem))] rounded-xl border border-gray-200 bg-white p-4 text-left shadow-lg outline-none max-sm:left-0! max-sm:top-auto! max-sm:bottom-0 max-sm:w-full max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:pb-[max(1rem,env(safe-area-inset-bottom))]"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="text-[15px] font-medium text-gray-900 leading-snug">{entry.term}</p>
              <button
                type="button"
                onClick={() => close(true)}
                className="-mr-1 -mt-1 rounded-md px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{entry.short}</p>
            {entry.analogy && <p className="mt-2 text-sm text-gray-500 leading-relaxed">{entry.analogy}</p>}
            <a
              href={`/jargon#${entry.id}`}
              className="mt-3 inline-block text-[13px] font-medium text-gray-900 hover:text-gray-600"
            >
              All the jargon, explained →
            </a>
          </div>,
          document.body, // a <div> may not sit inside the <p> the word is in
        )}
    </>
  );
}
