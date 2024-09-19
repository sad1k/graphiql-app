import { describe, it, beforeEach, vi, expect, Mock } from 'vitest';
import { signInWithPopup } from 'firebase/auth';
import { IFetchUser } from '@/types/IUser';
import { signInWithGoogle } from './signInWithGoogle';
import { getUser } from './user/getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import addUserToDb from './user/addUserToDb';
import { setTokens } from '../tokens/setTokens';
import { convertDateToMs } from '../date/convertDateToMs';

vi.mock('firebase/auth', () => ({
  signInWithPopup: vi.fn(),
  GoogleAuthProvider: vi.fn(() => ({})),
  getAuth: vi.fn(() => ({})),
}));

vi.mock('./user/getUser', () => ({
  getUser: vi.fn(),
}));

vi.mock('./user/addUserToDb', () => ({
  default: vi.fn(),
}));

vi.mock('./getFirebaseErrorMessage', () => ({
  getFirebaseErrorMessage: vi.fn(),
}));

vi.mock('../tokens/setTokens', () => ({
  setTokens: vi.fn(),
}));

describe('signInWithGoogle function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return user and call setTokens if user is found', async () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'John Doe',
      email: 'test@example.com',
      authProvider: 'google',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    (signInWithPopup as Mock).mockResolvedValue({
      user: { uid: '123' },
    });

    (getUser as Mock).mockResolvedValue(mockUser);

    const result = await signInWithGoogle();

    expect(result).toBe(mockUser);
    expect(setTokens).toHaveBeenCalledWith(mockUser);
  });

  it('should add user to DB if user is not found and then return the user', async () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'John Doe',
      email: 'test@example.com',
      authProvider: 'google',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    (signInWithPopup as Mock).mockResolvedValue({
      user: { uid: '123' },
    });

    (getUser as Mock)
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(mockUser);

    const result = await signInWithGoogle();

    expect(result).toBe(mockUser);
    expect(addUserToDb).toHaveBeenCalledWith({ uid: '123' }, 'google');
    expect(setTokens).toHaveBeenCalledWith(mockUser);
  });

  it('should return error message if an error occurs', async () => {
    const error = new Error('Firebase error');

    (signInWithPopup as Mock).mockRejectedValue(error);
    (getFirebaseErrorMessage as Mock).mockReturnValue('Error message');

    const result = await signInWithGoogle();

    expect(result).toBe('Error message');
    expect(addUserToDb).not.toHaveBeenCalled();
    expect(setTokens).not.toHaveBeenCalled();
  });
});
