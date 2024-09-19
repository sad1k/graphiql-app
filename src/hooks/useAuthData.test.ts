// useAuthData.test.ts
import { describe, it, expect, vi, Mock, beforeEach } from 'vitest';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/utils/store/hooks';
import { IFetchUser } from '@/types/IUser';
import { setAuthState, removeAuthState } from '@/utils/store/slices/userSlice';
import { removeTokens } from '@/utils/tokens/removeTokens';
import notification from '@/utils/notification/notification';
import { SIGN_IN } from '@/constants/path';
import { convertDateToMs } from '@/utils/date/convertDateToMs';
import useAuthData from './useAuthData';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

vi.mock('@/utils/store/hooks', () => ({
  useAppDispatch: vi.fn(),
}));

vi.mock('@/utils/store/slices/userSlice', () => ({
  setAuthState: vi.fn(),
  removeAuthState: vi.fn(),
}));

vi.mock('@/utils/tokens/removeTokens', () => ({
  removeTokens: vi.fn(),
}));

vi.mock('@/utils/notification/notification', () => ({
  default: vi.fn(),
}));

describe('useAuthData', () => {
  const mockDispatch = vi.fn();
  const mockPush = vi.fn();

  beforeEach(() => {
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);
    (useRouter as Mock).mockReturnValue({ push: mockPush });
  });

  it('should dispatch setAuthState and navigate to path if newUser is an object and path is provided', () => {
    const { saveAuthData } = useAuthData();
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'Test User',
      email: 'test@example.com',
      authProvider: 'firebase',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    saveAuthData(mockUser, '/dashboard');

    expect(mockDispatch).toHaveBeenCalledWith(setAuthState(mockUser));
    expect(mockPush).toHaveBeenCalledWith('/dashboard');
  });

  it('should display an error notification if newUser is a string', () => {
    const { saveAuthData } = useAuthData();

    saveAuthData('Error message');

    expect(notification).toHaveBeenCalledWith('error', 'Error message');
  });

  it('should remove auth state, tokens, and navigate to sign in', () => {
    const { removeAuthData } = useAuthData();

    removeAuthData();

    expect(mockDispatch).toHaveBeenCalledWith(removeAuthState());
    expect(removeTokens).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith(SIGN_IN);
  });
});
