import { setCookie } from 'cookies-next';
import { IFetchUser } from '@/types/IUser';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/cookies';

type TSetTokens = (user: IFetchUser) => void;

export const setTokens: TSetTokens = (user: IFetchUser) => {
  const { accessToken, expirationTime, refreshToken } = user;

  setCookie(ACCESS_TOKEN, accessToken, { maxAge: expirationTime });
  setCookie(REFRESH_TOKEN, refreshToken);
};
