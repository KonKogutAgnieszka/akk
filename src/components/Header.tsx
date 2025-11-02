import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between text-lg">
        <div className="flex items-center space-x-20">
          <Link href="/">główna</Link>
          <Link href="/cases">przypadki</Link>
          <Link href="/blog">blog</Link>
        </div>
        <div>
          <Link href="/contact">kontakt</Link>
        </div>
      </nav>
    </header>
  );
}
