'use client';

import Image from 'next/image';
import RotatingTexts from '@/components/ui/RotatingText.js';
import { StatItem } from './StatItem';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('HeroSection');

  const textList: string[] = t.raw('rotating') as string[];

  return (
    <section className="section flex flex-col min-h-[75vh] justify-center p-0 mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6 md:max-w-xl">
          <div>
            <span className="badge-available">{t('badge')}</span>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="font-display leading-none">
              <span className="hero-greeting block text-2xl md:text-[length:inherit]">
                {t('greeting')}
              </span>
              <span className="display-italic text-[56px] md:text-[96px]">{t('name')}</span>
            </h1>
            <p className="hero-subtitle text-sm md:text-base">{t('subtitle')}</p>
          </div>

          <div className="flex gap-3 md:gap-4 items-center">
            <Button text={t('btnPrimary')} variant="primary" />
            <Button text={t('btnGhost')} variant="ghost" />
          </div>
        </div>

        <div
          className="relative flex-shrink-0 self-center md:self-end mt-8 md:mt-0"
          style={{ overflow: 'visible' }}
        >
          <div
            className="absolute w-[200px] h-[200px] md:w-[380px] md:h-[380px] rounded-full pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background:
                'radial-gradient(circle, rgba(211,205,213,1) 0%, rgba(211,205,213,0.85) 40%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          <Image
            src={'/assets/images/photo_akk_no_back.png'}
            width={320}
            height={420}
            alt="portrait"
            draggable={false}
            className="pointer-events-none select-none relative w-auto h-[200px] md:h-[260px] xl:h-[390px]"
            style={{ zIndex: 1 }}
          />

          <div
            className="card-float absolute -bottom-4 -left-6 md:-left-10 w-[180px] md:w-[240px]"
            style={{
              zIndex: 2,
              animationName: 'rt-fade-slide-in',
              animationDuration: '500ms',
              animationTimingFunction: 'ease',
              animationFillMode: 'both',
              animationDelay: '400ms',
            }}
          >
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={24}
              height={24}
              className="mb-1 md:w-8 md:h-8"
            />
            <RotatingTexts texts={textList} />
          </div>
        </div>
      </div>

      <div className="flex gap-12 pt-8">
        <div className="flex flex-wrap gap-6 md:gap-12 pt-6 md:pt-8">
          <StatItem number="120+" label={t('stats.challengesTaken')} animation="count" />
          <StatItem number="100+" label={t('stats.problemsSolved')} animation="problems-solved" />
          <StatItem number="3+" label={t('stats.experienceYears')} animation="count" />
          <StatItem number="∞" label={t('stats.growth')} />
        </div>
      </div>
    </section>
  );
}
