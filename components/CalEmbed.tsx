'use client';

import { useEffect } from 'react';
import { renderCalInline } from '@/lib/cal';

const ELEMENT_ID = 'cal-inline-30min';

// Full inline calendar, used only on /book (the home page opens a popup instead).
export default function CalEmbed() {
  useEffect(() => {
    renderCalInline(ELEMENT_ID);
  }, []);

  return (
    <div
      id={ELEMENT_ID}
      className="w-full min-h-[640px] overflow-auto"
      aria-label="Book a 30-minute consulting call"
    />
  );
}
