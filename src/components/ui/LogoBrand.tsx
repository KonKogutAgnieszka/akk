import Link from 'next/link';
import Image from 'next/image';

type LogoBrandProps = {
  minimalistic?: boolean;
};

export default function LogoBrand({ minimalistic = false }: LogoBrandProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 z-50 group"
      style={{ color: 'var(--color-text)' }}
    >
      <Image src="/assets/images/logo.svg" alt="logo" width={32} height={32} />
      {minimalistic ? (
        <span
          className="font-display text-lg font-medium overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap"
        >
          Agnieszka Koń-Kogut
        </span>
      ) : (
        <span className="font-display text-lg font-medium">Agnieszka Koń-Kogut</span>
      )}
    </Link>
  );
}
