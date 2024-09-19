import { describe, it, beforeEach, vi, expect, Mock } from 'vitest';
import {
  collection,
  getDocs,
  query,
  where,
  Firestore,
} from 'firebase/firestore';
import { IFetchUser } from '@/types/IUser';

import { signInWithToken } from './signInWithToken';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { convertDateToMs } from '../date/convertDateToMs';

import { db } from './firebaseConfig';

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  getFirestore: vi.fn(() => ({}) as Firestore),
}));

vi.mock('./getFirebaseErrorMessage', () => ({
  getFirebaseErrorMessage: vi.fn(),
}));

describe('signInWithToken function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return user data if token is found', async () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'John Doe',
      email: 'test@example.com',
      authProvider: 'google',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    (collection as Mock).mockReturnValue({});
    (query as Mock).mockReturnValue({});
    (where as Mock).mockReturnValue({});
    (getDocs as Mock).mockResolvedValue({
      docs: [
        {
          data: () => mockUser,
        } as unknown,
      ],
    } as unknown);

    const result = await signInWithToken('refresh-token');

    expect(result).toEqual(mockUser);
    expect(getDocs).toHaveBeenCalledWith(
      query(
        collection(db, 'users'),
        where('refreshToken', '==', 'refresh-token'),
      ),
    );
  });

  it('should return null if token is not found', async () => {
    // Arrange
    (collection as Mock).mockReturnValue({});
    (query as Mock).mockReturnValue({});
    (where as Mock).mockReturnValue({});
    (getDocs as Mock).mockResolvedValue({
      docs: [],
    } as unknown);

    const result = await signInWithToken('refresh-token');

    expect(result).toBeNull();
    expect(getDocs).toHaveBeenCalledWith(
      query(
        collection(db, 'users'),
        where('refreshToken', '==', 'refresh-token'),
      ),
    );
  });

  it('should return error message if an error occurs', async () => {
    const error = new Error('Firebase error');

    (getDocs as Mock).mockRejectedValue(error);
    (getFirebaseErrorMessage as Mock).mockReturnValue('Error message');

    const result = await signInWithToken('refresh-token');

    expect(result).toBe('Error message');
    expect(getDocs).toHaveBeenCalledWith(
      query(
        collection(db, 'users'),
        where('refreshToken', '==', 'refresh-token'),
      ),
    );
  });
});
