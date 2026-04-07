'use client';

import Image from 'next/image';
import RotatingTexts from '@/components/RotatingText.js';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('HeroSection');

  const textList: string[] = t.raw('rotating') as string[];

  return (
    <section className="section flex flex-col min-h-[75vh] justify-center p-0">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-xl">
          <div>
            <span className="badge-available">{t('badge')}</span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-display leading-none">
              <span className="hero-greeting block">{t('greeting')}</span>
              <span className="display-italic text-[96px]">{t('name')}</span>
            </h1>
            <p className="hero-subtitle">{t('subtitle')}</p>
          </div>

          <div className="flex gap-4 items-center">
            <Button text={t('btnPrimary')} variant="primary" />
            <Button text={t('btnGhost')} variant="ghost" />
          </div>
        </div>

        <div className="relative flex-shrink-0 self-start" style={{ overflow: 'visible' }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '560px',
              height: '560px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(211,205,213,1) 0%, rgba(211,205,213,0.85) 40%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <Image
            src={'/assets/images/photo_akk_no_back.png'}
            width={320}
            height={420}
            alt="portrait"
            draggable={false}
            className="pointer-events-none select-none relative"
            style={{ height: '440px', width: 'auto' }}
          />

          <div
            className="card-float absolute -bottom-4 -left-10 w-[240px]"
            style={{
              zIndex: 2,
              animationName: 'rt-fade-slide-in',
              animationDuration: '500ms',
              animationTimingFunction: 'ease',
              animationFillMode: 'both',
              animationDelay: '400ms',
            }}
          >
            <Image src="/assets/images/logo.svg" alt="logo" width={32} height={32} className="mb-1" />
            <RotatingTexts texts={textList} />
          </div>
        </div>
      </div>

      <div className="flex gap-12 pt-8">
        <StatItem number="100+" label={t('stats.problemsSolved')} animateCount />
        <StatItem number="3+" label={t('stats.experienceYears')} />
        <StatItem number="∞" label={t('stats.growth')} />
      </div>
    </section>
  );
}

function StatItem({
  number,
  label,
  animateCount,
}: {
  number: string;
  label: string;
  animateCount?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className={`stat-number ${animateCount ? 'animate-count-up' : ''}`}>{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
