import Image from 'next/image';
import Link from 'next/link';
import { Variant, Size, variantClass, sizeClass, sizeIcon } from '@/components/ui/buttonConfig';

type BaseProps = {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  variant?: Variant;
  size?: Size;
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
  const { text, leftIcon, rightIcon, variant = 'primary', size = 'md' } = props;
  const px = sizeIcon[size];
  const className = `btn ${sizeClass[size]} ${variantClass[variant]} cursor-pointer`;

  const content = (
    <>
      {leftIcon && <Image src={leftIcon} alt="" width={px} height={px} aria-hidden />}
      {text}
      {rightIcon && <Image src={rightIcon} alt="" width={px} height={px} aria-hidden />}
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
