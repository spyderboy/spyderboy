'use client';

import { CAL_URL } from '@/lib/constants';
import { ensureCal, openCalModal } from '@/lib/cal';

// "Book a call" link that opens the Cal.com popup. It preloads on hover/focus so
// the popup opens instantly, and it's a real link to cal.com underneath, so it
// still works if JavaScript or the embed fails (or on middle/cmd-click).
export default function BookButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={() => ensureCal()}
      onFocus={() => ensureCal()}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        openCalModal();
      }}
    >
      {children}
    </a>
  );
}
