'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import LangSwitcher from './ui/LangSwitcher';

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations('Header');
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/cases', label: t('nav.cases') },
    { href: '/about', label: t('nav.about') },
  ];

  return (
    <header className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 z-50" style={{ color: 'var(--color-text)' }}>
        <Image src="/assets/images/logo.svg" alt="logo" width={32} height={32} />
        <span className="font-display text-lg font-medium">Agnieszka Koń-Kogut</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-14">
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

      {/* Desktop right side */}
      <div className="hidden md:flex items-center gap-4">
        <LangSwitcher />
        <Link href="/contact" className="btn btn-primary text-sm">
          {t('connect')}
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className="block h-[2px] w-6 bg-current transition-transform duration-300 origin-center"
          style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
        />
        <span
          className="block h-[2px] w-6 bg-current transition-opacity duration-300"
          style={{ opacity: menuOpen ? 0 : 1 }}
        />
        <span
          className="block h-[2px] w-6 bg-current transition-transform duration-300 origin-center"
          style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col gap-8 px-6 pt-24 pb-10"
          style={{ background: 'var(--color-bg)' }}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-2xl ${pathname === href ? 'nav-link-active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <LangSwitcher />
            <Link href="/contact" className="btn btn-primary text-sm text-center">
              {t('connect')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
