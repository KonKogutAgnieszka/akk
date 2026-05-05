'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import SnakePath from './SnakePath';
import Technology from '@/components/ui/Technology';
import { useFadeInUp } from '@/hooks/useFadeInUp';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  const locale = useLocale();
  const cvHref = locale === 'pl' ? '/assets/documents/CV_PL.pdf' : '/assets/documents/CV_ENG.pdf';
  const ref1 = useFadeInUp<HTMLDivElement>(0);
  const ref2 = useFadeInUp<HTMLDivElement>(150);
  const ref3 = useFadeInUp<HTMLDivElement>(300);
  const ref4 = useFadeInUp<HTMLDivElement>(100);
  const ref5 = useFadeInUp<HTMLDivElement>(0);
  const ref6 = useFadeInUp<HTMLDivElement>(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const btnRef = useRef<HTMLAnchorElement>(null);

  function handleSnakeComplete() {
    btnRef.current?.classList.add('is-filled');
  }

  const specializations = t.raw('specializations') as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="relative mt-8">
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '27%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(45, 212, 199, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      <SnakePath onComplete={handleSnakeComplete} />

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
                  style={{ color: '#A3E635' }}
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

        <div ref={ref5} className="w-full wide:w-[58%] relative section-glow pt-8 pb-8">
          <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {t.rich('workBio1', {
              accent: (chunks) => (
                <span style={{ color: 'var(--color-accent)' }}>{chunks}</span>
              ),
            })}
          </p>
        </div>

        <div ref={ref6} className="w-full wide:w-[58%] wide:ml-auto pt-16 pb-8">
          <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {t.rich('workBio2', {
              accent: (chunks) => (
                <span style={{ color: '#A3E635' }}>{chunks}</span>
              ),
              green: (chunks) => (
                <span style={{ color: '#A3E635' }}>{chunks}</span>
              ),
            })}
          </p>
        </div>

        <div ref={ref3} className="w-full mr-auto wide:h-[260px]">
          <h3 className="font-display text-4xl font-medium mb-8" style={{ color: 'var(--color-accent)' }}>{t('stackLabel')}</h3>
          <div className="grid grid-cols-5 wide:grid-cols-9 gap-4 justify-items-center">
            {[
              { name: 'HTML', icon: '/assets/icons/html.svg' },
              { name: 'CSS', icon: '/assets/icons/css.svg' },
              { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
              { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
              { name: 'React', icon: '/assets/icons/react.svg' },
              { name: 'Next.js', icon: '/assets/icons/next.svg' },
              { name: 'Tailwind', icon: '/assets/icons/tailwind.svg' },
              { name: 'Node.js', icon: '/assets/icons/node.svg' },
              { name: 'Express', icon: '/assets/icons/express.svg' },
              { name: 'NestJS', icon: '/assets/icons/nestjs.svg' },
              { name: 'RESTAPI', icon: '/assets/icons/restapi.svg' },
              { name: 'TanStack', icon: '/assets/icons/tanstack.svg' },
              { name: 'Sass', icon: '/assets/icons/sass.svg' },

              { name: 'Redux', icon: '/assets/icons/redux.svg' },
              { name: 'Figma', icon: '/assets/icons/figma.svg' },
              { name: 'Jest', icon: '/assets/icons/jest.svg' },
              { name: 'Playwright', icon: '/assets/icons/playwright.svg' },
            ].map(({ name, icon }) => (
              <Technology key={name} name={name} icon={icon} />
            ))}
            <div className="flex flex-col items-center justify-end gap-2 pb-1"></div>
          </div>
        </div>

        <div
          ref={ref4}
          className="mt-9 w-full wide:w-[58%] wide:ml-auto relative section-glow flex flex-col items-end gap-6 py-8 pr-20"
          style={{ minHeight: '260px' }}
        >
          <p className="font-display italic text-2xl mt-[69px]" style={{ color: 'var(--color-text-muted)' }}>
            {t('ctaSubtitle')}
          </p>
          <div className="flex gap-4 mt-2">
            <a ref={btnRef} href={cvHref} className="btn btn-fill-lr">
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
