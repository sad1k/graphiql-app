// getUser.test.ts
import { describe, it, expect, vi, Mock } from 'vitest';
import { collection, getDocs, where } from 'firebase/firestore';
import { IFetchUser } from '@/types/IUser';
import { convertDateToMs } from '@/utils/date/convertDateToMs';
import { getUser } from './getUser';
import { db } from '../firebaseConfig';

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
}));

vi.mock('../firebaseConfig', () => ({
  db: {},
}));

describe('getUser', () => {
  it('should return user data when user exists', async () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'Test User',
      email: 'test@example.com',
      authProvider: 'firebase',
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      expirationTime: convertDateToMs(new Date().toISOString()),
    };

    const mockDocs = {
      docs: [
        {
          data: () => mockUser,
        },
      ],
    };

    (getDocs as unknown as Mock).mockResolvedValueOnce(mockDocs);
    const result = await getUser('123');

    expect(result).toEqual(mockUser);
    expect(collection).toHaveBeenCalledWith(db, 'users');
    expect(where).toHaveBeenCalledWith('uid', '==', '123');
  });

  it('should return null when user does not exist', async () => {
    const mockDocs = { docs: [] };

    (getDocs as unknown as Mock).mockResolvedValueOnce(mockDocs);
    const result = await getUser('123');

    expect(result).toBeNull();
  });
});
