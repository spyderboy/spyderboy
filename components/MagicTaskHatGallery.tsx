'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const SCREENSHOTS = [
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-3.png', label: 'Pipeline' },
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-6.png', label: 'Sprint' },
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-8.png', label: 'Roadmap' },
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-9.png', label: 'Analytics' },
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-4.png', label: 'Templates' },
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-5.png', label: 'New Task' },
  { src: '/images/projects/magictaskhat.com/magictaskhat.com-1.png', label: 'Onboarding' },
];

export default function MagicTaskHatGallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = (i: number) => {
    setActive(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + SCREENSHOTS.length) % SCREENSHOTS.length), []);
  const next = useCallback(() => setActive((i) => (i + 1) % SCREENSHOTS.length), []);

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

  return (
    <>
      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {SCREENSHOTS.map((s, i) => (
          <button
            key={s.src}
            onClick={() => openAt(i)}
            aria-label={`View ${s.label}`}
            className="relative flex-shrink-0 rounded-md overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            style={{ width: 88, height: 50 }}
          >
            <Image
              src={s.src}
              alt={s.label}
              width={88}
              height={50}
              className="object-cover object-top w-full h-full"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {/* Magnify icon on first thumbnail only */}
            {i === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full p-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -top-9 right-0 text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div
              className="relative w-full rounded-xl overflow-hidden bg-[#0d0f14]"
              style={{ aspectRatio: '16 / 9' }}
            >
              <Image
                key={SCREENSHOTS[active].src}
                src={SCREENSHOTS[active].src}
                alt={`Magic Task Hat — ${SCREENSHOTS[active].label}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>

            {/* Label + counter */}
            <div className="flex items-center justify-between mt-3 px-0.5">
              <span className="text-sm text-white/50">{SCREENSHOTS[active].label}</span>
              <span className="text-sm text-white/30">{active + 1} / {SCREENSHOTS.length}</span>
            </div>

            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/40 hover:text-white transition-colors hidden sm:block"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/40 hover:text-white transition-colors hidden sm:block"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile: tap left/right halves to navigate */}
            <div className="absolute inset-0 flex sm:hidden rounded-xl overflow-hidden">
              <button onClick={prev} className="flex-1" aria-label="Previous" />
              <button onClick={next} className="flex-1" aria-label="Next" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
