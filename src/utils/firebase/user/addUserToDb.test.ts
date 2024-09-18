// addUserToDb.test.ts
import { describe, it, expect, vi, Mock } from 'vitest';
import { collection } from 'firebase/firestore';
import { User } from 'firebase/auth';
import addUserToDb from './addUserToDb';
import { db } from '../firebaseConfig';
import getUserAccessToken from './getUserAccessToken';

vi.mock('firebase/firestore', () => ({
  addDoc: vi.fn(),
  collection: vi.fn(),
}));

vi.mock('../firebaseConfig', () => ({
  db: {},
}));

vi.mock('./getUserAccessToken', () => ({
  default: vi.fn(),
}));

describe('addUserToDb', () => {
  it('should add user to Firestore with provided name', async () => {
    const mockUser = {
      uid: '123',
      email: 'test@example.com',
      displayName: null,
      refreshToken: 'refresh_token',
    } as unknown as User;

    const mockAccessToken = {
      accessToken: { token: 'access_token' },
      expirationTime: 1234567890,
    };

    (getUserAccessToken as Mock).mockResolvedValueOnce(mockAccessToken);

    await addUserToDb(mockUser, 'firebase', 'Test User');

    expect(getUserAccessToken).toHaveBeenCalledWith(mockUser);
    expect(collection).toHaveBeenCalledWith(db, 'users');
  });

  it('should add user to Firestore with display name when available', async () => {
    const mockUser = {
      uid: '123',
      email: 'test@example.com',
      displayName: 'Display Name',
      refreshToken: 'refresh_token',
    } as unknown as User;

    const mockAccessToken = {
      accessToken: { token: 'access_token' },
      expirationTime: 1234567890,
    };

    (getUserAccessToken as Mock).mockResolvedValueOnce(mockAccessToken);

    await addUserToDb(mockUser, 'google');

    expect(getUserAccessToken).toHaveBeenCalledWith(mockUser);
    expect(collection).toHaveBeenCalledWith(db, 'users');
  });
});
