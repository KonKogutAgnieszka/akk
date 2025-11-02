'use client';

import Image from 'next/image';
import Link from 'next/link';
import RotatingTexts from '@/components/RotatingText.js';
import Button from '@/components/ui/Button';

const textList: string[] = [
  '👩🏻‍💻 frontend developer',
  '🖥️ buduję interfejsy',
  '💡 rozwiązuje problemy',
  '⚙️ wdrażam rozwiązania',
  '🥊 podejmuje wyzwania',
];

export default function HeroSection() {
  return (
    <div className={'flex justify-center mt-30  w-full'}>
      <div className={'flex flex-col justify-center mr-20'}>
        <p className="text-4xl">cześć, jestem</p>
        <div className={'flex mt-6'}>
          <Image
            src={'/assets/images/logo_pion.svg'}
            className={'block'}
            width={55}
            height={200}
            alt={'logo'}
          />
          <div className={'flex flex-col justify-between h-full ml-6'}>
            <h1 className="text-8xl">
              {' '}
              Agnieszka <br />
              Koń-Kogut
            </h1>
          </div>
        </div>
        <div className={'mt-6 self-end'}>
          <RotatingTexts texts={textList} />
        </div>
        <div className={'mt-6'}>
          <Button text={'poznajmy się'} variant={'yellow'} />
        </div>
      </div>
      <Image
        src={'/assets/images/photo_akk_no_back.png'}
        width={320}
        height={320}
        alt={'portrait'}
        draggable={false}
        className="pointer-events-none select-none"
        style={{ height: '320px', width: 'auto' }}
      />
    </div>
  );
}
