// getTokens.test.ts
import { describe, it, expect, vi, Mock } from 'vitest';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/cookies';
import { getTokens } from './getTokens';

vi.mock('cookies-next', () => ({
  getCookie: vi.fn(),
}));

describe('getTokens', () => {
  it('should return accessToken and refreshToken when cookies are available', () => {
    const mockAccessToken = 'mockAccessToken';
    const mockRefreshToken = 'mockRefreshToken';

    (getCookie as Mock).mockImplementationOnce((cookieName: string) => {
      if (cookieName === ACCESS_TOKEN) return mockAccessToken;
      if (cookieName === REFRESH_TOKEN) return mockRefreshToken;

      return null;
    });
  });

  it('should return null for tokens if cookies are not available', () => {
    (getCookie as Mock).mockReturnValue(null);

    const tokens = getTokens();

    expect(getCookie).toHaveBeenCalledWith(ACCESS_TOKEN);
    expect(getCookie).toHaveBeenCalledWith(REFRESH_TOKEN);
    expect(tokens).toEqual({
      accessToken: 'mockAccessToken',
      refreshToken: null,
    });
  });
});
