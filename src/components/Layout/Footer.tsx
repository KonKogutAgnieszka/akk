import Link from 'next/link';
import LogoBrand from '../ui/LogoBrand';

const navLinks = [
  { href: 'https://github.com/KonKogutAgnieszka', label: 'Github' },
  { href: 'https://www.linkedin.com/in/agnieszka-ko%C5%84-kogut-15a3061a1/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <div className="flex flex-col">
        <LogoBrand minimalistic />
        <p className="uppercase text-xs" style={{ color: 'var(--color-text-muted)' }}>
          © 2026 Crafted in the digital ether.
        </p>
      </div>
      <div className="flex gap-6">
        {navLinks.map(({ href, label }) => (
          <Link
            className="uppercase text-xs"
            style={{ color: 'var(--color-text-muted)' }}
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
