// getUserAccessToken.test.ts
import { describe, it, expect, vi, Mock } from 'vitest';
import { User, IdTokenResult } from 'firebase/auth';
import { convertDateToMs } from '@/utils/date/convertDateToMs';
import getUserAccessToken from './getUserAccessToken';

const expirationTime = 172800000;

vi.mock('@/utils/date/convertDateToMs', () => ({
  convertDateToMs: vi.fn(),
}));

describe('getUserAccessToken', () => {
  it('should return accessToken and expirationTime', async () => {
    const mockUser = {
      getIdTokenResult: vi.fn(),
    } as unknown as User;

    const mockIdTokenResult = {
      token: 'mockAccessToken',
      expirationTime: '2024-09-30T00:00:00.000Z',
    } as IdTokenResult;

    (mockUser.getIdTokenResult as Mock).mockResolvedValueOnce(
      mockIdTokenResult,
    );
    (convertDateToMs as Mock).mockReturnValueOnce(expirationTime);

    const result = await getUserAccessToken(mockUser);

    expect(mockUser.getIdTokenResult).toHaveBeenCalled();
    expect(convertDateToMs).toHaveBeenCalledWith(
      mockIdTokenResult.expirationTime,
    );
    expect(result).toEqual({
      accessToken: mockIdTokenResult,
      expirationTime,
    });
  });
});
