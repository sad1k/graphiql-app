import { describe, it, beforeEach, vi, expect, Mock } from 'vitest';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { IFetchUser } from '@/types/IUser';
import { signUp } from './signUp';
import { getUser } from './user/getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import addUserToDb from './user/addUserToDb';
import { setTokens } from '../tokens/setTokens';
import { convertDateToMs } from '../date/convertDateToMs';

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(() => ({})),
}));

vi.mock('./user/getUser', () => ({
  getUser: vi.fn(),
}));

vi.mock('./getFirebaseErrorMessage', () => ({
  getFirebaseErrorMessage: vi.fn(),
}));

vi.mock('./user/addUserToDb', () => ({
  default: vi.fn(),
}));

vi.mock('../tokens/setTokens', () => ({
  setTokens: vi.fn(),
}));

describe('signUp function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return user data if sign up is successful', async () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'John Doe',
      email: 'test@example.com',
      authProvider: 'firebase',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    (addUserToDb as Mock).mockResolvedValue(undefined);
    (getUser as Mock).mockResolvedValue(mockUser);
    (setTokens as Mock).mockImplementation(() => {});

    const result = await signUp('John Doe', 'test@example.com', 'password123');

    expect(result).toEqual(undefined);
  });

  it('should return error message if sign up fails', async () => {
    const error = new Error('Firebase error');

    (createUserWithEmailAndPassword as Mock).mockRejectedValue(error);
    (getFirebaseErrorMessage as Mock).mockReturnValue('Error message');

    const result = await signUp('John Doe', 'test@example.com', 'password123');

    expect(result).toBe('Error message');

    expect(getFirebaseErrorMessage).toHaveBeenCalledWith(error);
    expect(addUserToDb).not.toHaveBeenCalled();
    expect(getUser).not.toHaveBeenCalled();
    expect(setTokens).not.toHaveBeenCalled();
  });
});
