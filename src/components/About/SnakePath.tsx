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
      className="absolute left-0 w-full pointer-events-none"
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
        <g opacity="0.9">
          <line
            x1={ball.x}
            y1={ball.y - 9}
            x2={ball.x}
            y2={ball.y + 6}
            stroke="#F4DBF0"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <line
            x1={ball.x - 7}
            y1={ball.y}
            x2={ball.x + 10}
            y2={ball.y}
            stroke="#F4DBF0"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <line
            x1={ball.x - 8}
            y1={ball.y - 6}
            x2={ball.x + 5}
            y2={ball.y + 8}
            stroke="#F4DBF0"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <line
            x1={ball.x + 7}
            y1={ball.y - 8}
            x2={ball.x - 4}
            y2={ball.y + 6}
            stroke="#F4DBF0"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
}
