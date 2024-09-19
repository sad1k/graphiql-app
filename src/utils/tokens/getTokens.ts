import { CookieValueTypes, getCookie } from 'cookies-next';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/cookies';

type TGetTokens = () => {
  accessToken: CookieValueTypes;
  refreshToken: CookieValueTypes;
};

export const getTokens: TGetTokens = () => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const refreshToken = getCookie(REFRESH_TOKEN);

  return { accessToken, refreshToken };
};
