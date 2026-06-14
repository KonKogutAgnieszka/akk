import Image from 'next/image';

type Variant =
  | 'primary'
  | 'primary-outline'
  | 'primary-glass'
  | 'secondary'
  | 'secondary-outline'
  | 'secondary-glass'
  | 'sweep';

type Props = {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  variant?: Variant;
  iconSize?: number;
  onClick?: () => void;
};

const variantClass: Record<Variant, string> = {
  primary: 'primary-btn',
  'primary-outline': 'primary-outline-btn',
  'primary-glass': 'primary-glass-btn',
  secondary: 'secondary-btn',
  'secondary-outline': 'secondary-outline-btn',
  'secondary-glass': 'secondary-glass-btn',
  sweep: 'sweep-btn',
};

export default function Button({
  text,
  leftIcon,
  rightIcon,
  variant = 'primary',
  iconSize = 18,
  onClick,
}: Props) {
  return (
    <button onClick={onClick} className={`btn cursor-pointer ${variantClass[variant]}`}>
      {leftIcon && <Image src={leftIcon} alt="" width={iconSize} height={iconSize} aria-hidden />}
      {text}
      {rightIcon && <Image src={rightIcon} alt="" width={iconSize} height={iconSize} aria-hidden />}
    </button>
  );
}
