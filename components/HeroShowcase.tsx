'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects';

const THUMBS = PROJECTS.filter((p) => p.screenshots.length > 0).map((p) => ({
  src: p.screenshots[0]!.src,
  name: p.name,
}));

// Decorative: each project's thumbnail fades up to 60%, holds, fades out, then the
// next one takes over (the hero-thumb keyframes in globals.css). With reduced
// motion the animation is off, so it just shows the first thumbnail at 60%.
export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  if (THUMBS.length === 0) return null;

  const current = THUMBS[index]!;
  const next = THUMBS[(index + 1) % THUMBS.length]!;

  return (
    <div
      aria-hidden
      className="hidden md:block pointer-events-none absolute right-0 top-8 w-[360px] h-[162px]"
    >
      <div
        key={index}
        className="hero-thumb absolute inset-0 rounded-lg overflow-hidden"
        onAnimationEnd={() => setIndex((i) => (i + 1) % THUMBS.length)}
      >
        <Image src={current.src} alt="" fill sizes="360px" className="object-cover object-top" priority={index === 0} />
      </div>
      {/* Warm the next image so it's decoded before its fade starts. */}
      <Image src={next.src} alt="" width={360} height={162} className="invisible absolute" />
    </div>
  );
}
