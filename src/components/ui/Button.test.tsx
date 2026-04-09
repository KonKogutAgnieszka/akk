import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button', () => {
  it('should render with text', () => {
    render(<Button text="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('should handle click', async () => {
    const handleClick = jest.fn();
    render(<Button text="test" onClick={handleClick} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    const element = screen.getByText('test');
    await userEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
