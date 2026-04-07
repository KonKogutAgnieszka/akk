import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'NotFound' });

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] gap-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <span
          className="font-display font-medium"
          style={{ fontSize: '120px', color: '#AACC00', lineHeight: 1 }}
        >
          404
        </span>
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: 'var(--color-text-subtle)' }}
        >
          {t('label')}
        </p>
      </div>

      <h1
        className="font-display text-5xl font-medium leading-none"
        style={{ color: 'var(--color-text)' }}
      >
        {t('title')}
      </h1>

      <Link href="/" className="btn btn-primary text-sm">
        {t('btn')}
      </Link>
    </main>
  );
}
