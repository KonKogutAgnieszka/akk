'use client';

import { useEffect, useRef, useState } from 'react';

export default function SnakePath() {
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<SVGSVGElement>(null);
  const [ball, setBall] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    function onScroll() {
      const path = pathRef.current;
      const svg = sectionRef.current;
      if (!path || !svg) return;

      const section = svg.parentElement;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);

      const totalLength = path.getTotalLength();
      const point = path.getPointAtLength(progress * totalLength);
      setBall({ x: point.x, y: point.y });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <svg
      ref={sectionRef}
      viewBox="0 -180 1076 1400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 w-full pointer-events-none hidden wide:block"
      style={{ top: '50px', height: 'auto' }}
      preserveAspectRatio="xMidYMin meet"
      overflow="visible"
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M294.813 1.4H974 A160 160 0 0 1 974 321.4 H102 A160 160 0 0 0 102 641.4 H974 A160 160 0 0 1 974 961.4 H102 A160 160 0 0 0 102 1281.4 H752.12"
        stroke="#D3CDD5"
        strokeOpacity="0.5"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {ball && (
        <g>
          <circle cx={ball.x} cy={ball.y} r={14} fill="white" opacity="0.08" />
          <circle cx={ball.x} cy={ball.y} r={8} fill="white" opacity="0.12" />
          <circle cx={ball.x} cy={ball.y} r={5} fill="var(--color-accent)" opacity="0.95" />
        </g>
      )}
    </svg>
  );
}
