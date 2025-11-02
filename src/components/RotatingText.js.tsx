import { useEffect, useState } from 'react';

type Props = {
  texts: string[];
  interval?: number;
  rowHeight?: number;
  duration?: number;
};

export default function RotatingTextsEnter({
  texts,
  interval = 2000,
  rowHeight = 34,
  duration = 500,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, texts.length]);

  return (
    <div
      className="relative overflow-hidden font-serif italic text-2xl"
      style={{ height: rowHeight, lineHeight: `${rowHeight}px` }}
    >
      <p key={index} className="rt-enter" style={{ animationDuration: `${duration}ms` }}>
        {texts[index] ?? ''}
      </p>

      <style>{`
        .rt-enter {
          animation-name: rt-fade-slide-in;
          animation-duration: ${duration}ms;
          animation-timing-function: ease;
          animation-fill-mode: both; /* zostaje w stanie końcowym */
          will-change: transform, opacity;
        }
        @keyframes rt-fade-slide-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
