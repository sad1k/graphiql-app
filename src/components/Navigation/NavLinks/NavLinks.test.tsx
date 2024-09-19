import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect, Mock } from 'vitest';
import { useAppSelector } from '@/utils/store/hooks';
import useAuthData from '@/hooks/useAuthData';
import '@testing-library/jest-dom';

import NavLinks from './NavLinks';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');

  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
  };
});
vi.mock('@/utils/store/hooks', () => ({
  useAppSelector: vi.fn(),
}));

vi.mock('@/hooks/useAuthData', () => ({
  default: vi.fn(() => ({
    removeAuthData: vi.fn(),
  })),
}));

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(() => (key: string) => key),
}));

describe('NavLinks Component', () => {
  const mockToggleDrawer = vi.fn();

  it('should render sign in and sign up links when not authenticated', () => {
    (useAppSelector as Mock).mockReturnValue(false);

    render(<NavLinks toggleDrawer={mockToggleDrawer} isDriverBar={false} />);

    expect(screen.getByText('signIn')).toBeInTheDocument();
    expect(screen.getByText('signUp')).toBeInTheDocument();
  });

  it('should render home link and sign out button when authenticated', () => {
    (useAppSelector as Mock).mockReturnValue(true);

    render(<NavLinks toggleDrawer={mockToggleDrawer} isDriverBar={false} />);

    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('signOut')).toBeInTheDocument();
  });

  it('should call toggleDrawer when clicked', () => {
    (useAppSelector as Mock).mockReturnValue(false);

    render(<NavLinks toggleDrawer={mockToggleDrawer} isDriverBar={false} />);

    fireEvent.click(screen.getByRole('presentation'));

    expect(mockToggleDrawer).toHaveBeenCalledWith(false);
  });

  it('should call removeAuthData when sign out button is clicked', () => {
    const mockRemoveAuthData = vi.fn();

    (useAppSelector as Mock).mockReturnValue(true);
    (useAuthData as Mock).mockReturnValue({
      removeAuthData: mockRemoveAuthData,
    });

    render(<NavLinks toggleDrawer={mockToggleDrawer} isDriverBar={false} />);

    fireEvent.click(screen.getByText('signOut'));

    expect(mockRemoveAuthData).toHaveBeenCalled();
  });
});
