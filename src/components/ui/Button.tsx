import Image from 'next/image';

type Variant =
  | 'primary'
  | 'primary-outline'
  | 'primary-glass'
  | 'secondary'
  | 'secondary-outline'
  | 'secondary-glass'
  | 'sweep';

type Size = 'sm' | 'md' | 'lg';

const variantClass: Record<Variant, string> = {
  primary: 'primary-btn',
  'primary-outline': 'primary-outline-btn',
  'primary-glass': 'primary-glass-btn',
  secondary: 'secondary-btn',
  'secondary-outline': 'secondary-outline-btn',
  'secondary-glass': 'secondary-glass-btn',
  sweep: 'sweep-btn',
};

const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

const sizeIcon: Record<Size, number> = {
  sm: 15,
  md: 18,
  lg: 22,
};

type Props = {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
};

export default function Button({
  text,
  leftIcon,
  rightIcon,
  variant = 'primary',
  size = 'md',
  onClick,
}: Props) {
  const px = sizeIcon[size];
  return (
    <button
      onClick={onClick}
      className={`btn ${sizeClass[size]} ${variantClass[variant]} cursor-pointer`}
    >
      {leftIcon && <Image src={leftIcon} alt="" width={px} height={px} aria-hidden />}
      {text}
      {rightIcon && <Image src={rightIcon} alt="" width={px} height={px} aria-hidden />}
    </button>
  );
}
