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
  it('badge variant should render with name', () => {
    render (<Technology variant="badge" name="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  })
   it('badge variant renders icon when provided', () => {
     render(<Technology variant="badge" name="React" icon="/react.svg" />);
     expect(screen.getByRole('img')).toBeInTheDocument();
   });
   it('badge variant renders initials when no icon', () => {
     render(<Technology variant="badge" name="React" />);
     expect(screen.getByText('RE')).toBeInTheDocument();
   });
});
