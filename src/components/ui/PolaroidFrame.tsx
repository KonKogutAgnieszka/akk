import Image from 'next/image';

type PolaroidFrameSize = 'sm' | 'md' | 'lg';

const frameSizeClasses = {
  sm: 'w-[140px] h-[175px] p-1.5 pb-5',
  md: 'w-[200px] h-[250px] p-2 pb-8',
  lg: 'w-[280px] h-[350px] p-3 pb-10',
} satisfies Record<PolaroidFrameSize, string>;

type PolaroidFrameProps = {
  image?: string;
  alt?: string;
  size: PolaroidFrameSize;
};

export default function PolaroidFrame({
  image = '/assets/images/project_placeholder.webp',
  alt = 'project image',
  size,
}: PolaroidFrameProps) {
  return (
    <div
      data-testid="polaroid-frame"
      className={`
        ${frameSizeClasses[size]}
       bg-[var(--color-text)]
        shadow-xl
      `}
    >
      <div className="relative h-full w-full overflow-hidden bg-black">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 200px, 400px"
        />
      </div>
    </div>
  );
}
