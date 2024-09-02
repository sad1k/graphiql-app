import { CookieValueTypes, getCookie } from 'cookies-next';

type TGetTokens = () => {
  accessToken: CookieValueTypes;
  refreshToken: CookieValueTypes;
};

export const getTokens: TGetTokens = () => {
  const accessToken = getCookie('access-token');
  const refreshToken = getCookie('refresh-token');

  return { accessToken, refreshToken };
};
