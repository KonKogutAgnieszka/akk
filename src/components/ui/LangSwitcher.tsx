'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'pl' ? 'en' : 'pl';

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button onClick={handleSwitch} className="flag-btn">
      <Image
        src={`/flags/${locale}.svg`}
        alt={`Switch to ${nextLocale.toUpperCase()}`}
        width={32}
        height={32}
      />
    </button>
  );
}
