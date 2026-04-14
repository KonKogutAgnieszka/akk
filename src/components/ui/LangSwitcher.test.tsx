import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import LangSwitcher from './LangSwitcher';
import { useLocale } from 'next-intl';

jest.mock('next-intl', () => ({ useLocale: jest.fn() }));
jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

describe('LangSwitcher', () => {
  it('should render', () => {
    render(<LangSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should handle click', async () => {
    (useLocale as jest.Mock).mockReturnValue('pl');
    const mockRefresh = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ refresh: mockRefresh });
    render(<LangSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    const element = screen.getByRole('button');
    await userEvent.click(element);
    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });
});
