'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const nextLocale = locale === 'pl' ? 'en' : 'pl';

  const handleSwitch = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    router.refresh();
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
