import { deleteCookie } from 'cookies-next';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/cookies';

type TSetTokens = () => void;

export const removeTokens: TSetTokens = () => {
  deleteCookie(ACCESS_TOKEN);
  deleteCookie(REFRESH_TOKEN);
};
