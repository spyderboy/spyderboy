'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { Screenshot } from '@/lib/projects';

interface Props {
  name: string;
  screenshots: Screenshot[];
}

// "Title — detail" captions: the title labels thumbnails, the whole caption shows in the lightbox.
function shortLabel(caption: string, fallback: string): string {
  return caption.split(' — ')[0]?.trim() || fallback;
}

export default function ProjectGallery({ name, screenshots }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const count = screenshots.length;

  const openAt = (i: number) => {
    setActive(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (count === 0) return null;
  const [lead, ...rest] = screenshots;
  const current = screenshots[active]!;

  return (
    <>
      {/* Lead image (the project's thumbnail) */}
      <button
        onClick={() => openAt(0)}
        aria-label={`View ${name} screenshots`}
        className="relative block w-full rounded-lg overflow-hidden bg-gray-50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        style={{ aspectRatio: '20 / 9' }}
      >
        <Image
          src={lead!.src}
          alt={`${name} — ${lead!.caption}`}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </button>

      {/* Thumbnail strip */}
      {rest.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-1 mt-2">
          {rest.map((s, i) => (
            <button
              key={s.src}
              onClick={() => openAt(i + 1)}
              aria-label={`View ${shortLabel(s.caption, `screenshot ${i + 2}`)}`}
              title={shortLabel(s.caption, '')}
              className="relative flex-shrink-0 rounded-md overflow-hidden bg-gray-50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              style={{ width: 100, height: 45 }}
            >
              <Image
                src={s.src}
                alt={s.caption}
                width={100}
                height={45}
                className="object-cover object-top w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshots`}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -top-9 right-0 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div
              className="relative w-full rounded-xl overflow-hidden bg-[#0d0f14]"
              style={{ aspectRatio: '16 / 9' }}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={`${name} — ${current.caption}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
              {count > 1 && (
                <>
                  <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 text-white transition-colors z-10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 text-white transition-colors z-10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 mt-3 px-0.5">
              <span className="text-sm text-white/60">{current.caption}</span>
              <span className="text-sm text-white/60 whitespace-nowrap">{active + 1} / {count}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
