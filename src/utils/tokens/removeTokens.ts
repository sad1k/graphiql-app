import { deleteCookie } from 'cookies-next';

type TSetTokens = () => void;

export const removeTokens: TSetTokens = () => {
  deleteCookie('access-token');
  deleteCookie('refresh-token');
};
