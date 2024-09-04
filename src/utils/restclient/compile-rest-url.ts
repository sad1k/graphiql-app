import { THeaders } from '@/types/headers';
import base64url from 'base64url';
import { TMethod } from './method-type';

const compileRestUrl = (url: string, method: TMethod, headers: THeaders) => {
  const encodeUrl = base64url(url);
  const searchParams = new URLSearchParams(
    headers.map(({ key, value }) => [key, value]),
  ).toString();

  return `/restclient/${method}/${encodeUrl}?${searchParams}`;
};

export default compileRestUrl;
