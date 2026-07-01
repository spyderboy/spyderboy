'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Props {
  videoId: string;
  title?: string;
}

export default function YouTubeFacade({ videoId, title = 'YouTube video' }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="absolute inset-0 w-full h-full group"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-500 transition-colors rounded-2xl px-5 py-3 flex items-center gap-2.5 shadow-xl group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-white text-sm font-medium whitespace-nowrap">{title}</span>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
