'use client';

import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import Image from 'next/image';

export interface WalkthroughScreen {
  src: string;
  label: string;
  /** Height in CSS pixels at 390 wide; taller than 844 scrolls inside the phone. */
  height: number;
}

export interface WalkthroughSlide {
  chapter: string;
  title: string;
  body: ReactNode;
  points?: ReactNode[];
  screens: WalkthroughScreen[];
}

const PHONE_HEIGHT = 844;

export default function Walkthrough({ slides }: { slides: WalkthroughSlide[] }) {
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const count = slides.length;
  const slide = slides[active]!;
  const shot = slide.screens[screen] ?? slide.screens[0]!;
  const chapters = [...new Set(slides.map((s) => s.chapter))];

  const go = useCallback(
    (i: number) => {
      setActive(Math.max(0, Math.min(count - 1, i)));
      setScreen(0);
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest('input, textarea')) return;
      if (e.key === 'ArrowRight') go(active + 1);
      if (e.key === 'ArrowLeft') go(active - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [active, go]);

  // A new screen starts at its top.
  useEffect(() => {
    phoneRef.current?.scrollTo({ top: 0 });
  }, [active, screen]);

  const scrolls = shot.height > PHONE_HEIGHT;

  return (
    <div
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        touchX.current = null;
        if (start == null || end == null || Math.abs(end - start) < 60) return;
        go(end < start ? active + 1 : active - 1);
      }}
    >
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Chapters">
        {chapters.map((c) => {
          const first = slides.findIndex((s) => s.chapter === c);
          const on = slide.chapter === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={on}
              onClick={() => go(first)}
              className={`text-xs rounded-full px-3 py-1.5 transition-colors ${
                on ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="h-1 bg-gray-100 rounded-full mb-8 overflow-hidden" aria-hidden>
        <div
          className="h-full bg-teal-700 transition-all duration-300"
          style={{ width: `${((active + 1) / count) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
        <div className="mx-auto w-[260px] sm:w-[300px]">
          <div className="rounded-[2.4rem] border-[10px] border-gray-900 bg-gray-900 shadow-xl overflow-hidden">
            <div
              ref={phoneRef}
              className="relative overflow-y-auto overscroll-contain bg-slate-50 rounded-[1.7rem]"
              style={{ aspectRatio: `390 / ${PHONE_HEIGHT}` }}
              tabIndex={scrolls ? 0 : -1}
              aria-label={scrolls ? `${shot.label}: scroll to see the whole screen` : undefined}
            >
              <Image
                key={shot.src}
                src={shot.src}
                alt={`EstateWise: ${shot.label}`}
                width={390}
                height={shot.height}
                sizes="300px"
                className="w-full h-auto block"
                preload={active === 0}
              />
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3 h-4">
            {scrolls ? 'Scroll inside the phone to see the whole screen' : ' '}
          </p>
          {slide.screens.length > 1 && (
            <div className="flex justify-center gap-1.5 mt-3 flex-wrap">
              {slide.screens.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setScreen(i)}
                  aria-pressed={i === screen}
                  className={`text-xs rounded-md px-2.5 py-1 border transition-colors ${
                    i === screen
                      ? 'border-teal-700 text-teal-800 bg-teal-50'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="md:pt-6" aria-live="polite">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
            {slide.chapter} · {active + 1} of {count}
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">{slide.title}</h2>
          <div className="text-[15px] text-gray-600 leading-relaxed mb-5">{slide.body}</div>
          {slide.points && (
            <ul className="space-y-2.5 mb-8">
              {slide.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-700" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(active - 1)}
              disabled={active === 0}
              className="text-sm rounded-lg border border-gray-200 px-4 py-2 text-gray-700 hover:border-gray-300 disabled:opacity-40 disabled:cursor-default"
            >
              ← Back
            </button>
            <button
              onClick={() => go(active + 1)}
              disabled={active === count - 1}
              className="text-sm rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-40 disabled:cursor-default"
            >
              Next →
            </button>
            <span className="hidden sm:inline text-xs text-gray-400 ml-2">or use the arrow keys</span>
          </div>
        </div>
      </div>
    </div>
  );
}
