// setTokens.test.ts
import { describe, it, expect, vi } from 'vitest';
import { setCookie } from 'cookies-next';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/cookies';
import { IFetchUser } from '@/types/IUser';
import { setTokens } from './setTokens';

vi.mock('cookies-next', () => ({
  setCookie: vi.fn(),
}));

describe('setTokens', () => {
  it('should set accessToken and refreshToken cookies with the correct values', () => {
    const mockUser: IFetchUser = {
      uid: '123',
      name: 'Test User',
      email: 'test@example.com',
      authProvider: 'local',
      accessToken: 'mockAccessToken',
      refreshToken: 'mockRefreshToken',
      expirationTime: 3600,
    };

    setTokens(mockUser);

    expect(setCookie).toHaveBeenCalledWith(ACCESS_TOKEN, 'mockAccessToken', {
      maxAge: 3600,
    });
    expect(setCookie).toHaveBeenCalledWith(REFRESH_TOKEN, 'mockRefreshToken');
  });

  it('should not call setCookie if accessToken or refreshToken is missing', () => {
    const mockUserWithoutTokens: IFetchUser = {
      uid: '123',
      name: 'Test User',
      email: 'test@example.com',
      authProvider: 'local',
      accessToken: '',
      refreshToken: '',
      expirationTime: 3600,
    };

    setTokens(mockUserWithoutTokens);

    expect(setCookie).toHaveBeenCalledWith(ACCESS_TOKEN, '', {
      maxAge: 3600,
    });
    expect(setCookie).toHaveBeenCalledWith(REFRESH_TOKEN, '');
  });
});
