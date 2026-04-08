'use client';

import { useEffect, useMemo, useState } from 'react';

type StatItemAnimation = 'count' | 'problems-solved';

type StatItemProps = {
  number: string;
  label: string;
  animation?: StatItemAnimation;
};

export function StatItem({ number, label, animation = 'count' }: StatItemProps) {
  const [isMounted, setIsMounted] = useState(false);
  const displayNumber = useAnimatedStat(number, animation, isMounted);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <span className={`stat-number${isMounted ? ' animate-count-up' : ''}`}>
        {displayNumber}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function useAnimatedStat(number: string, animation: StatItemAnimation, isMounted: boolean): string {
  const parsed = useMemo(() => {
    const numericValue = parseInt(number.replace(/\D/g, ''), 10);
    const suffix = number.replace(/[0-9]/g, '');

    return {
      value: Number.isNaN(numericValue) ? null : numericValue,
      suffix,
    };
  }, [number]);

  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isMounted || parsed.value === null) return;

    setCount(0);

    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (animation === 'count') {
      const duration = 1400;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * parsed.value!));
        if (progress < 1) frameId = requestAnimationFrame(tick);
      };

      frameId = requestAnimationFrame(tick);
    }

    if (animation === 'problems-solved') {
      const fastTarget = Math.min(90, parsed.value);
      const finalTarget = parsed.value;
      const fastDuration = 700;
      const slowDuration = 1800;
      const fastStart = performance.now();

      const fastTick = (now: number) => {
        const progress = Math.min((now - fastStart) / fastDuration, 1);
        setCount(Math.floor(progress * fastTarget));

        if (progress < 1) {
          frameId = requestAnimationFrame(fastTick);
          return;
        }

        const slowStart = performance.now();
        const slowTick = (slowNow: number) => {
          const slowProgress = Math.min((slowNow - slowStart) / slowDuration, 1);
          const easedProgress = 1 - Math.pow(1 - slowProgress, 3);
          setCount(Math.floor(fastTarget + (finalTarget - fastTarget) * easedProgress));
          if (slowProgress < 1) frameId = requestAnimationFrame(slowTick);
        };

        timeoutId = setTimeout(() => { frameId = requestAnimationFrame(slowTick); }, 120);
      };

      frameId = requestAnimationFrame(fastTick);
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [animation, parsed.value, isMounted]);

  if (parsed.value === null) return number;
  if (!isMounted || count === null) return `0${parsed.suffix}`;
  return `${count}${parsed.suffix}`;
}
