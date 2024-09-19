import { describe, it, beforeEach, vi, expect, Mock } from 'vitest';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LOGIN_ERROR } from '@/constants/errors';
import { IFetchUser } from '@/types/IUser';

import { signIn } from './signIn';
import { getUser } from './user/getUser';
import { setTokens } from '../tokens/setTokens';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { convertDateToMs } from '../date/convertDateToMs';

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(() => ({})),
}));

vi.mock('./user/getUser', () => ({
  getUser: vi.fn(),
}));

vi.mock('../tokens/setTokens', () => ({
  setTokens: vi.fn(),
}));

vi.mock('./getFirebaseErrorMessage', () => ({
  getFirebaseErrorMessage: vi.fn(),
}));

describe('signIn function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return user when login is successful', async () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'John Doe',
      email: 'test@example.com',
      authProvider: 'firebase',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    (signInWithEmailAndPassword as Mock).mockResolvedValue({
      user: { uid: '123' },
    });

    (getUser as Mock).mockResolvedValue(mockUser);

    const result = await signIn('test@example.com', 'password123');

    expect(result).toBe(mockUser);
    expect(setTokens).toHaveBeenCalledWith(mockUser);
  });

  it('should return LOGIN_ERROR when getUser returns null', async () => {
    (signInWithEmailAndPassword as Mock).mockResolvedValue({
      user: { uid: '123' },
    });

    (getUser as Mock).mockResolvedValue(null);

    const result = await signIn('test@example.com', 'password123');

    expect(result).toBe(LOGIN_ERROR);
    expect(setTokens).not.toHaveBeenCalled();
  });

  it('should return firebase error message when an error occurs', async () => {
    const error = new Error('Firebase error');

    (signInWithEmailAndPassword as Mock).mockRejectedValue(error);
    (getFirebaseErrorMessage as Mock).mockReturnValue('Error message');

    const result = await signIn('test@example.com', 'password123');

    expect(result).toBe('Error message');
  });
});
