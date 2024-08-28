import { setCookie } from 'cookies-next';

type TSetTokens = (
  accessToken: string,
  maxAge: number,
  refreshToken: string,
) => void;

export const setTokens: TSetTokens = (accessToken, maxAge, refreshToken) => {
  setCookie('access-token', accessToken, { maxAge });
  setCookie('refresh-token', refreshToken);
};
