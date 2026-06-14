import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Button — as button', () => {
  it('renders text', () => {
    render(<Button text="Kliknij" />);
    expect(screen.getByText('Kliknij')).toBeInTheDocument();
  });

  it('renders a <button> element by default', () => {
    render(<Button text="test" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button text="test" onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has default type="button"', () => {
    render(<Button text="test" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies variant class', () => {
    render(<Button text="test" variant="secondary" />);
    expect(screen.getByRole('button')).toHaveClass('secondary-btn');
  });

  it('applies size class', () => {
    render(<Button text="test" size="lg" />);
    expect(screen.getByRole('button')).toHaveClass('btn-lg');
  });

  it('renders left icon', () => {
    render(<Button text="test" leftIcon="/icon.svg" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

describe('Button — as link', () => {
  it('renders an <a> element when href is provided', () => {
    render(<Button text="test" href="/about" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<Button text="test" href="/about" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
  });

  it('opens in new tab when newTab is true', () => {
    render(<Button text="test" href="/about" newTab />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not set target when newTab is false', () => {
    render(<Button text="test" href="/about" />);
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
  });
});
