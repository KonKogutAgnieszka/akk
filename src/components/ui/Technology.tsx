import Image from 'next/image';

type TechnologyProps = {
  name: string;
  icon?: string;
  initials?: string;
};

export default function Technology({ name, icon, initials }: TechnologyProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: 'var(--color-surface)' }}
      >
        {icon ? (
          <Image src={icon} alt={name} width={24} height={24} />
        ) : (
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            {initials ?? name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
        {name}
      </span>
    </div>
  );
}
