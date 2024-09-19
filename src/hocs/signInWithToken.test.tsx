import { describe, test, vi, expect, beforeEach, Mock } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { redirect } from 'next/navigation';
import useAuthData from '@/hooks/useAuthData';
import { signInWithToken } from '@/utils/firebase/signInWithToken';
import notification from '@/utils/notification/notification';
import { getTokens } from '@/utils/tokens/getTokens';
import { SIGN_IN } from '@/constants/path';
import { useAppSelector } from '@/utils/store/hooks';
import withTokenSignIn from './signInWithToken';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

vi.mock('@/hooks/useAuthData', () => ({
  default: vi.fn(() => ({
    saveAuthData: vi.fn(),
    removeAuthData: vi.fn(),
  })),
}));

vi.mock('@/utils/firebase/signInWithToken', () => ({
  signInWithToken: vi.fn(),
}));

vi.mock('@/utils/notification/notification', () => ({
  default: vi.fn(),
}));

vi.mock('@/utils/tokens/getTokens', () => ({
  getTokens: vi.fn(),
}));

vi.mock('@/utils/store/hooks', () => ({
  useAppSelector: vi.fn(),
}));

const TestComponent: React.FC = () => <div>Test Component</div>;

describe('withTokenSignIn HOC', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('redirects to SIGN_IN if no refresh token is found', () => {
    (getTokens as Mock).mockReturnValue({ refreshToken: null });
    (useAppSelector as Mock).mockReturnValue(false);
    const removeAuthDataMock = vi.fn();

    (useAuthData as Mock).mockReturnValue({
      removeAuthData: removeAuthDataMock,
    });

    const ComponentWithTokenSignIn = withTokenSignIn(TestComponent);

    render(<ComponentWithTokenSignIn />);

    expect(redirect).toHaveBeenCalledWith(SIGN_IN);
    expect(removeAuthDataMock).toHaveBeenCalled();
    expect(screen.queryByText('Test Component')).toBeNull();
  });

  test('renders the component when refresh token is present and user is authenticated', () => {
    (getTokens as Mock).mockReturnValue({
      refreshToken: 'valid-refresh-token',
    });
    (useAppSelector as Mock).mockReturnValue(true);

    const ComponentWithTokenSignIn = withTokenSignIn(TestComponent);

    render(<ComponentWithTokenSignIn />);

    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(redirect).not.toHaveBeenCalled();
  });

  test('attempts to sign in with token if user is not authenticated', async () => {
    (getTokens as Mock).mockReturnValue({
      refreshToken: 'valid-refresh-token',
    });
    (useAppSelector as Mock).mockReturnValue(false);
    const saveAuthDataMock = vi.fn();

    (useAuthData as Mock).mockReturnValue({
      saveAuthData: saveAuthDataMock,
    });
    (signInWithToken as Mock).mockResolvedValue({ user: 'mockUser' });

    const ComponentWithTokenSignIn = withTokenSignIn(TestComponent);

    render(<ComponentWithTokenSignIn />);

    await waitFor(() => {
      expect(signInWithToken).toHaveBeenCalledWith('valid-refresh-token');
      expect(saveAuthDataMock).toHaveBeenCalledWith({ user: 'mockUser' });
    });

    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  test('shows error notification if signInWithToken fails', async () => {
    (getTokens as Mock).mockReturnValue({ refreshToken: 'invalid-token' });
    (useAppSelector as Mock).mockReturnValue(false);
    const notificationMock = vi.fn();

    (notification as Mock).mockReturnValue(notificationMock);
    (signInWithToken as Mock).mockRejectedValue(new Error('Token error'));

    const ComponentWithTokenSignIn = withTokenSignIn(TestComponent);

    render(<ComponentWithTokenSignIn />);

    await waitFor(() => {
      expect(notification).toHaveBeenCalledWith('error', 'Token error');
    });
  });
});
