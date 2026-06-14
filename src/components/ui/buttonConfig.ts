export type Variant =
  | 'primary'
  | 'primary-outline'
  | 'primary-glass'
  | 'secondary'
  | 'secondary-outline'
  | 'secondary-glass'
  | 'sweep';

export type Size = 'sm' | 'md' | 'lg';

export const variantClass: Record<Variant, string> = {
  primary: 'primary-btn',
  'primary-outline': 'primary-outline-btn',
  'primary-glass': 'primary-glass-btn',
  secondary: 'secondary-btn',
  'secondary-outline': 'secondary-outline-btn',
  'secondary-glass': 'secondary-glass-btn',
  sweep: 'sweep-btn',
};

export const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export const sizeIcon: Record<Size, number> = {
  sm: 15,
  md: 18,
  lg: 22,
};
