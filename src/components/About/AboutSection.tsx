'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import SnakePath from './SnakePath';
import Technology from '@/components/ui/Technology';
import { useFadeInUp } from '@/hooks/useFadeInUp';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  const ref1 = useFadeInUp<HTMLDivElement>(0);
  const ref2 = useFadeInUp<HTMLDivElement>(150);
  const ref3 = useFadeInUp<HTMLDivElement>(300);
  const ref4 = useFadeInUp<HTMLDivElement>(450);

  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function onScroll() {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (scrolledToBottom) {
        btn!.classList.add('is-filled');
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const specializations = t.raw('specializations') as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="relative mt-8">
      <SnakePath />

      <div className="relative flex flex-col gap-18" style={{ paddingBlock: '10%' }}>
        <div ref={ref1} className="w-full wide:w-[68%] mr-auto pb-28">
          <h1 className="font-display text-6xl font-medium leading-tight">{t('heading1')}</h1>
          <h2 className="font-display text-7xl font-medium mb-6">{t('heading2')}</h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {t('intro')
              .split('\n')
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </div>

        <div ref={ref2} className="w-full wide:ml-auto wide:h-[220px] relative">
          <span
            className="absolute top-0 right-0 font-display italic text-2xl"
            style={{ color: 'var(--color-accent)' }}
          >
            {t('specializationsLabel')}
          </span>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-12">
            {specializations.map(({ number, title, description }) => (
              <div key={number} className="flex gap-4">
                <span
                  className="font-display font-semibold text-2xl leading-none mt-0.5"
                  style={{ color: '#AACC00' }}
                >
                  {number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-sans">{title}</h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref3} className="w-full  mr-auto wide:h-[220px]">
          <h3 className="font-display text-4xl font-medium mb-10">{t('stackLabel')}</h3>
          <div className="flex flex-wrap gap-8">
            {[
              { name: 'HTML', icon: '/assets/icons/html.svg' },
              { name: 'CSS', icon: '/assets/icons/css.svg' },
              { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
              { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
              { name: 'React', icon: '/assets/icons/react.svg' },
              { name: 'Next.js', icon: '/assets/icons/next.svg' },
              { name: 'Tailwind', icon: '/assets/icons/tailwind.svg' },
              { name: 'Node.js', icon: '/assets/icons/node.svg' },
              { name: 'REST API', initials: 'API' },
              { name: 'TanStack', initials: 'TS' },
              { name: 'Redux', icon: '/assets/icons/redux.svg' },
              { name: 'Figma', icon: '/assets/icons/figma.svg' },
            ].map(({ name, icon, initials }) => (
              <Technology key={name} name={name} icon={icon} initials={initials} />
            ))}
            <div className="flex flex-col items-center justify-end gap-2 pb-1">
              <span className="text-xl" style={{ color: 'var(--color-text-subtle)' }}>
                ···
              </span>
            </div>
          </div>
        </div>

        <div
          ref={ref4}
          className="mt-18 w-full wide:w-[58%] wide:ml-auto flex flex-col items-center gap-6 py-8"
          style={{ minHeight: '260px' }}
        >
          <p className="font-display italic text-2xl" style={{ color: 'var(--color-text-muted)' }}>
            {t('ctaSubtitle')}
          </p>
          <p className="font-display italic text-2xl">{t('ctaDownload')}</p>
          <div className="flex gap-4 mt-2">
            <a ref={btnRef} href="/cv.pdf" className="btn btn-fill-lr">
              {t('ctaDownload')}
            </a>
            <a href="/contact" className="btn btn-ghost">
              {t('ctaContact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
