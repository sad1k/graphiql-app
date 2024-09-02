import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/cookies';
import { CookieValueTypes, getCookie } from 'cookies-next';

type TGetTokens = () => {
  accessToken: CookieValueTypes;
  refreshToken: CookieValueTypes;
};

export const getTokens: TGetTokens = () => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const refreshToken = getCookie(REFRESH_TOKEN);

  return { accessToken, refreshToken };
};
