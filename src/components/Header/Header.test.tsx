import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, vi, expect, Mock } from 'vitest';
import Header from '@/components/Header/Header';
import HeaderContainer, {
  getLogoSize,
} from '@/components/Header/HeaderContainer';
import useScrolling from '@/hooks/useScrolling';

export const LogoSize = 80;
export const LogoActiveSize = 60;

vi.mock('@/hooks/useScrolling', () => ({
  default: vi.fn(),
}));

vi.mock('@/components/Navigation/Navigation', () => ({
  default: vi.fn(() => <div data-testid='navigation' />),
}));

vi.mock('next/image', () => ({
  default: vi.fn(
    ({
      src,
      width,
      height,
      alt,
    }: {
      src: 'string';
      width: number;
      height: number;
      alt: string;

      // eslint-disable-next-line
    }) => <img src={src} width={width} height={height} alt={alt} />,
  ),
}));

describe('HeaderContainer Component', () => {
  it('should render the logo and navigation', () => {
    render(<HeaderContainer isScrolling={false} />);

    const logo = screen.getByAltText('Logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.png');
    expect(logo).toHaveAttribute('width', '80');
    expect(logo).toHaveAttribute('height', '80');

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('should render smaller logo when isScrolling is true', () => {
    render(<HeaderContainer isScrolling />);

    const logo = screen.getByAltText('Logo');

    expect(logo).toHaveAttribute('width', '60');
    expect(logo).toHaveAttribute('height', '60');
  });

  it('should calculate the correct logo size', () => {
    expect(getLogoSize(false)).toBe(LogoSize);
    expect(getLogoSize(true)).toBe(LogoActiveSize);
  });
});

describe('Header Component', () => {
  it('should render HeaderContainer with isScrolling from hook', () => {
    (useScrolling as Mock).mockReturnValue([false]);

    render(<Header />);

    const logo = screen.getByAltText('Logo');

    expect(logo).toHaveAttribute('width', '80');

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('should update HeaderContainer when isScrolling changes', () => {
    (useScrolling as Mock).mockReturnValue([true]);

    render(<Header />);

    const logo = screen.getByAltText('Logo');

    expect(logo).toHaveAttribute('width', '60');
  });
});
