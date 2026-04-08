import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render with text', () => {
    render(<Button text="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
