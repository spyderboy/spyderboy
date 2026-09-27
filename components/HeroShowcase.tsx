'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface HeroThumb {
  src: string;
  name: string;
}

// Decorative: each project's thumbnail fades up to 60%, holds, fades out, then the
// next one takes over (the hero-thumb keyframes in globals.css). Thumbnails come
// in as props so the full project data stays out of the client bundle. A pause
// button (shown on hover/focus) stops the cycle; reduced motion shows a still.
export default function HeroShowcase({ thumbs }: { thumbs: HeroThumb[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  if (thumbs.length === 0) return null;

  const current = thumbs[index]!;
  const next = thumbs[(index + 1) % thumbs.length]!;

  return (
    <div className="group hidden md:block absolute right-0 top-8 w-[360px] h-[162px]">
      <div
        key={index}
        aria-hidden
        className={`hero-thumb pointer-events-none absolute inset-0 rounded-lg overflow-hidden ${paused ? 'hero-thumb-paused' : ''}`}
        onAnimationEnd={() => setIndex((i) => (i + 1) % thumbs.length)}
      >
        <Image src={current.src} alt="" fill sizes="360px" className="object-cover object-top" priority={index === 0} />
      </div>
      {/* Warm the next image so it's decoded before its fade starts. */}
      <Image src={next.src} alt="" width={360} height={162} className="invisible absolute" aria-hidden />
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? 'Play project thumbnails' : 'Pause project thumbnails'}
        aria-pressed={paused}
        className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[11px] text-zinc-200 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        {paused ? '▶ Play' : '❚❚ Pause'}
      </button>
    </div>
  );
}
