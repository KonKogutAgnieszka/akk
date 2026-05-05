import Image from 'next/image';

type TechnologyProps = {
  name: string;
  icon?: string;
  initials?: string;
};

export default function Technology({ name, icon, initials }: TechnologyProps) {
  return (
    <div className="tech-icon-wrapper flex flex-col items-center gap-1 cursor-pointer w-14">
      <div className="w-8 h-8 flex items-center justify-center">
        {icon ? (
          <Image src={icon} alt={name} width={30} height={30} className="tech-icon" />
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
