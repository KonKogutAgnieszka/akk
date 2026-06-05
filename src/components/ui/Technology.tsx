import Image from 'next/image';

type TechnologyProps = {
  variant?: 'icon' | 'badge';
  name: string;
  icon?: string;
  initials?: string;
};

export default function Technology({ variant = 'icon', name, icon, initials }: TechnologyProps) {
  return (
    <div
      className={`tech-icon-wrapper flex gap-1 items-center ${variant === 'icon' ? 'flex-col w-14' : 'flex-row h-8 px-2 badge'} cursor-pointer`}
    >
      <div className={`${variant === 'icon' ? 'w-8 h-8' : 'w-5 h-5'} flex items-center justify-center`}>
        {icon ? (
          <Image
            src={icon}
            alt={name}
            width={variant === 'icon' ? 30 : 20}
            height={variant === 'icon' ? 30 : 20}
            className={`tech-icon`}
          />
        ) : (
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            {initials ?? name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
        {name}
      </span>
    </div>
  );
}
