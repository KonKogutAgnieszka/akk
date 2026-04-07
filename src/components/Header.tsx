'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LangSwitcher from './ui/LangSwitcher';

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations('Header');

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/cases', label: t('nav.cases') },
    { href: '/contact', label: t('nav.about') },
  ];

  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3" style={{ color: 'var(--color-text)' }}>
        <Image src="/assets/images/logo.svg" alt="logo" width={32} height={32} />
        <span className="font-display text-lg font-medium">Agnieszka Koń-Kogut</span>
      </Link>

      <nav className="flex items-center gap-14">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link ${pathname === href ? 'nav-link-active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <LangSwitcher />
        <Link href="/contact" className="btn btn-primary text-sm">
          {t('connect')}
        </Link>
      </div>
    </header>
  );
}
