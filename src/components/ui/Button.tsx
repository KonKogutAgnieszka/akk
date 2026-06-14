import Link from 'next/link';
import { Variant, Size, variantClass, sizeClass, sizeIcon } from '@/components/ui/buttonConfig';

type BaseProps = {
  text: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

type LinkProps = BaseProps & {
  href: string;
  newTab?: boolean;
};

type Props = ButtonProps | LinkProps;

export default function Button(props: Props) {
  const { text, leftIcon, rightIcon, variant = 'primary', size = 'md', className: extraClass } = props;
  const px = sizeIcon[size];
  const className = `btn ${sizeClass[size]} ${variantClass[variant]} cursor-pointer${extraClass ? ` ${extraClass}` : ''}`;

  const iconStyle = (src: string): React.CSSProperties => ({
    display: 'inline-block',
    width: px,
    height: px,
    backgroundColor: 'currentColor',
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
    flexShrink: 0,
  });

  const renderIcon = (icon: string | React.ReactNode) =>
    typeof icon === 'string' ? <span style={iconStyle(icon)} aria-hidden /> : icon;

  const content = (
    <>
      {leftIcon && renderIcon(leftIcon)}
      {text}
      {rightIcon && renderIcon(rightIcon)}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link
        href={props.href}
        target={props.newTab ? '_blank' : undefined}
        rel={props.newTab ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={className}>
      {content}
    </button>
  );
}
