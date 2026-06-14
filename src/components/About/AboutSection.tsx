'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import SnakePath from './SnakePath';
import Technology from '@/components/ui/Technology';
import Button from '@/components/ui/Button';
import { TechnologyKey } from '@/data/technologies';
import { useFadeInUp } from '@/hooks/useFadeInUp';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  const locale = useLocale();
  const cvHref =
    locale === 'pl'
      ? '/assets/documents/Agnieszka_Kon_Kogut_pl.pdf'
      : '/assets/documents/Agnieszka_Kon_Kogut.pdf';
  const ref1 = useFadeInUp<HTMLDivElement>(0);
  const ref2 = useFadeInUp<HTMLDivElement>(150);
  const ref3 = useFadeInUp<HTMLDivElement>(300);
  const ref4 = useFadeInUp<HTMLDivElement>(100);
  const ref5 = useFadeInUp<HTMLDivElement>(0);
  const ref6 = useFadeInUp<HTMLDivElement>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [snakeDone, setSnakeDone] = useState(false);

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
      <SnakePath onComplete={() => setSnakeDone(true)} />

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
          <Image
            src="/assets/images/bg1.svg"
            alt=""
            aria-hidden={true}
            width={800}
            height={800}
            className="absolute pointer-events-none select-none"
            style={{
              right: 0,
              top: '50%',
              transform: 'translateY(calc(-150% + 300px)) translateX(30%)',
              opacity: 0.08,
              zIndex: 0,
            }}
          />
          <span
            className="absolute top-0 right-0 font-display italic text-2xl"
            style={{ color: 'var(--color-accent)' }}
          >
            {t('specializationsLabel')}
          </span>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 mt-10">
            {specializations.map(({ number, title, description }) => (
              <div key={number} className="flex gap-4">
                <span
                  className="font-display font-semibold text-2xl leading-none mt-0.5"
                  style={{ color: 'var(--color-special)' }}
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

        <div ref={ref5} className="w-full wide:w-[58%] relative section-glow pt-8 pb-6">
          <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {t.rich('workBio1', {
              accent: (chunks) => <span style={{ color: 'var(--color-accent)' }}>{chunks}</span>,
            })}
          </p>
        </div>

        <div ref={ref6} className="w-full wide:w-[58%] wide:ml-auto pt-8 pb-6">
          <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {t.rich('workBio2', {
              accent: (chunks) => <span style={{ color: 'var(--color-special)' }}>{chunks}</span>,
              green: (chunks) => <span style={{ color: 'var(--color-special)' }}>{chunks}</span>,
            })}
          </p>
        </div>

        <div ref={ref3} className="w-full mr-auto wide:h-[220px]">
          <h3
            className="font-display text-4xl font-medium mb-8"
            style={{ color: 'var(--color-accent)' }}
          >
            {t('stackLabel')}
          </h3>
          <div className="grid grid-cols-5 wide:grid-cols-9 gap-4 justify-items-center">
            {(
              [
                'html', 'css', 'javascript', 'typescript', 'react',
                'nextjs', 'tailwind', 'nodejs', 'express', 'nestjs',
                'restapi', 'tanstack', 'sass', 'redux', 'figma',
                'jest', 'playwright',
              ] as TechnologyKey[]
            ).map((key) => (
              <Technology key={key} technologyKey={key} />
            ))}
          </div>
        </div>

        <div
          ref={ref4}
          className="mt-9 w-full wide:w-[58%] wide:ml-auto relative section-glow flex flex-col items-end gap-6 py-8 pr-20"
          style={{ minHeight: '260px' }}
        >
          <p
            className="font-display italic text-2xl mt-7"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('ctaSubtitle')}
          </p>
          <div className="flex gap-4 mt-2">
            <Button href={cvHref} text={t('ctaDownload')} variant="sweep" newTab className={snakeDone ? 'is-filled' : ''} />
            <Button href="/contact" text={t('ctaContact')} variant="primary-outline" />
          </div>
        </div>
      </div>
    </section>
  );
}
