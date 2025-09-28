import Link from 'next/link'

export default function Header(){
return (
    <header>
    <nav className="flex items-center justify-between text-sm text-primary">
        <Link href="/">główna</Link>
        <Link href="/cases">przypadki</Link>
        <Link href="/blog">blog</Link>
        <Link href="/contact">kontakt</Link>
    </nav>
    </header>
)
}