import { render, screen } from '@testing-library/react';
import Project from '@/components/Projects/Project';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('lucide-react', () => ({
  ExternalLink: () => <svg data-testid="icon-external-link" />,
}));

jest.mock('@/components/ui/PolaroidFrame', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <div data-testid="polaroid">{alt}</div>,
}));

jest.mock('@/data/technologies', () => ({
  technologies: {
    react: { name: 'React', icon: '/icons/react.svg', initials: 'Re' },
    typescript: { name: 'TypeScript', icon: '/icons/typescript.svg', initials: 'TS' },
  },
}));

const defaultProps = {
  name: 'Mój Projekt',
  image: '/images/project.png',
  description: 'Opis projektu testowego.',
  technologies: ['react', 'typescript'] as const,
  demo: 'https://demo.example.com',
  readme: 'https://github.com/example/repo',
};

describe('Project', () => {
  it('renders project name', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByRole('heading', { name: 'Mój Projekt' })).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByText('Opis projektu testowego.')).toBeInTheDocument();
  });

  it('renders Demo link with correct href', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByRole('link', { name: /demo/i })).toHaveAttribute(
      'href',
      'https://demo.example.com'
    );
  });

  it('renders GitHub link with correct href', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/example/repo'
    );
  });

  it('both links open in new tab', () => {
    render(<Project {...defaultProps} />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveAttribute('target', '_blank'));
  });

  it('renders ExternalLink icon on Demo button', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByTestId('icon-external-link')).toBeInTheDocument();
  });

  it('renders polaroid frame with alt text', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByTestId('polaroid')).toHaveTextContent('Mój Projekt project preview');
  });

  it('renders all technology badges', () => {
    render(<Project {...defaultProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders divider between buttons and technologies', () => {
    const { container } = render(<Project {...defaultProps} />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });
});
