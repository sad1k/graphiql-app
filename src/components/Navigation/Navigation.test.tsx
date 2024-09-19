import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/utils/store/store';
import Navigation from './Navigation';

vi.mock('@/components/NavLinks/NavLinks', () => ({
  default: vi.fn(() => <div data-testid='nav-links' />),
}));

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');

  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
  };
});

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(() => (key: string) => key),
}));

describe('Navigation Component', () => {
  it('should render NavLinks and menu button', () => {
    render(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );

    expect(screen.getByTestId('nav-links')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
  });
});
