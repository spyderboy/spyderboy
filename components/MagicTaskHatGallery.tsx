'use client';

import { useState } from 'react';
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
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Featured screenshot */}
      <div
        className="relative w-full rounded-lg overflow-hidden bg-[#0d0f14]"
        style={{ aspectRatio: '16 / 9' }}
      >
        <Image
          key={SCREENSHOTS[active].src}
          src={SCREENSHOTS[active].src}
          alt={`Magic Task Hat — ${SCREENSHOTS[active].label}`}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-top"
          priority={active === 0}
        />
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1 scrollbar-none">
        {SCREENSHOTS.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            aria-label={s.label}
            className={`relative flex-shrink-0 rounded overflow-hidden transition-all duration-150 ${
              active === i
                ? 'ring-2 ring-gray-700 opacity-100'
                : 'opacity-35 hover:opacity-60'
            }`}
            style={{ width: 64, height: 36 }}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="64px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {/* Active label */}
      <p className="text-[11px] text-gray-400 mt-1.5 tabular-nums">
        {SCREENSHOTS[active].label}
        <span className="text-gray-300 ml-2">{active + 1} / {SCREENSHOTS.length}</span>
      </p>
    </div>
  );
}
