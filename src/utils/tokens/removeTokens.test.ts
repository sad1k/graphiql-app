import { describe, it, expect, vi } from 'vitest';
import { deleteCookie } from 'cookies-next';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/cookies';
import { removeTokens } from './removeTokens';

vi.mock('cookies-next', () => ({
  deleteCookie: vi.fn(),
}));

describe('removeTokens', () => {
  it('should call deleteCookie with ACCESS_TOKEN and REFRESH_TOKEN', () => {
    removeTokens();

    expect(deleteCookie).toHaveBeenCalledWith(ACCESS_TOKEN);
    expect(deleteCookie).toHaveBeenCalledWith(REFRESH_TOKEN);
  });
});
