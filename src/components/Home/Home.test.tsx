import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAppSelector } from '@/utils/store/hooks';
import Home from './Home';

vi.mock('../About/About', () => ({
  default: () => <div>About Component</div>,
}));

vi.mock('./HomeTitle/HomeTitle', () => ({
  default: ({ name }: { name?: string }) => (
    <h2 data-testid='home-title'>
      HomeTitle {name ? `with ${name}` : 'without name'}
    </h2>
  ),
}));

vi.mock('./HomeLinks/HomeLinks', () => ({
  default: ({ isAuth }: { isAuth: boolean }) => (
    <nav data-testid='home-links'>HomeLinks {isAuth ? 'Auth' : 'Guest'}</nav>
  ),
}));

vi.mock('@/utils/store/hooks', () => ({
  useAppSelector: vi.fn(),
}));

describe('Home Component', () => {
  it('renders correctly for unauthenticated users', () => {
    (useAppSelector as Mock).mockReturnValue(null);

    render(<Home />);

    expect(screen.getByTestId('home-section')).toBeDefined();
    expect(screen.getByTestId('home-page')).toBeDefined();
    expect(screen.getByTestId('home-image-container')).toBeDefined();
    expect(screen.getByText('About Component')).toBeDefined();
  });

  it('renders correctly for authenticated users', () => {
    (useAppSelector as Mock).mockReturnValue({ name: 'John Doe' });

    render(<Home />);

    expect(screen.getByTestId('home-section')).toBeDefined();
    expect(screen.getByTestId('home-page')).toBeDefined();
    expect(screen.getByTestId('home-title')).toHaveTextContent('with John Doe');
    expect(screen.getByTestId('home-links')).toHaveTextContent('Auth');
    expect(screen.getByTestId('home-image-container')).toBeDefined();
    expect(screen.getByText('About Component')).toBeDefined();
  });
});
