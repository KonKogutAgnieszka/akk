import { render, screen } from '@testing-library/react';
import Technology from './Technology';

describe('Technology', () => {
  it('should render with icon and text', () => {
    render(<Technology name="test" icon="/icon.png" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render with initials', () => {
    render(<Technology name="test" />);
    expect(screen.getByText('TE')).toBeInTheDocument();
  });
});
