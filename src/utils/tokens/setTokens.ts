import { IFetchUser } from '@/types/IUser';
import { setCookie } from 'cookies-next';

type TSetTokens = (user: IFetchUser) => void;

export const setTokens: TSetTokens = (user: IFetchUser) => {
  const { accessToken, expirationTime, refreshToken } = user;

  setCookie('access-token', accessToken, { maxAge: expirationTime });
  setCookie('refresh-token', refreshToken);
};
