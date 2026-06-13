import { render, screen } from '@testing-library/react';
import Technology from './Technology';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('@/data/technologies', () => ({
  technologies: {
    react:  { name: 'React',   icon: '/react.svg', initials: 'Re' },
    noicon: { name: 'No Icon',                     initials: 'NI' },
  },
}));

describe('Technology', () => {
  it('renders icon when technology has an icon', () => {
    render(<Technology technologyKey="react" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders technology name', () => {
    render(<Technology technologyKey="react" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders initials when technology has no icon', () => {
    render(<Technology technologyKey={'noicon' as any} />);
    expect(screen.getByText('NI')).toBeInTheDocument();
  });

  it('badge variant renders with name', () => {
    render(<Technology technologyKey="react" variant="badge" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('badge variant renders icon when technology has icon', () => {
    render(<Technology technologyKey="react" variant="badge" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('badge variant renders initials when no icon', () => {
    render(<Technology technologyKey={'noicon' as any} variant="badge" />);
    expect(screen.getByText('NI')).toBeInTheDocument();
  });
});
