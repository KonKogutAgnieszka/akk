import Image from 'next/image';
import { technologies, TechnologyKey } from '@/data/technologies';

type TechnologyProps = {
  technologyKey: TechnologyKey;
  variant?: 'icon' | 'badge';
};

export default function Technology({ technologyKey, variant = 'icon' }: TechnologyProps) {
  const { name, icon, initials } = technologies[technologyKey];

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
            className="tech-icon"
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
