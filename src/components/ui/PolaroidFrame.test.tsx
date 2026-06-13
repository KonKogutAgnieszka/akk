import { render, screen } from '@testing-library/react';

import PolaroidFrame from './PolaroidFrame';

describe(PolaroidFrame, () => {
  it('should render placeholder image with default alt text when image and alt prop are not present', () => {
    render(<PolaroidFrame size="lg" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'project image');
  });
  it('should apply small size classes', () => {
    render(<PolaroidFrame size="sm" />);

    const frame = screen.getByTestId('polaroid-frame');

    expect(frame).toHaveClass('w-[140px]');
    expect(frame).toHaveClass('h-[175px]');
    expect(frame).toHaveClass('p-1.5');
    expect(frame).toHaveClass('pb-5');
  });

  it('should apply medium size classes', () => {
    render(<PolaroidFrame size="md" />);

    const frame = screen.getByTestId('polaroid-frame');

    expect(frame).toHaveClass('w-[200px]');
    expect(frame).toHaveClass('h-[250px]');
    expect(frame).toHaveClass('p-2');
    expect(frame).toHaveClass('pb-8');
  });

  it('should apply large size classes', () => {
    render(<PolaroidFrame size="lg" />);

    const frame = screen.getByTestId('polaroid-frame');

    expect(frame).toHaveClass('w-[280px]');
    expect(frame).toHaveClass('h-[350px]');
    expect(frame).toHaveClass('p-3');
    expect(frame).toHaveClass('pb-10');
  });
});
