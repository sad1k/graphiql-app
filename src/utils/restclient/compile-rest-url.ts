import { THeaders } from '@/types/headers';
import base64url from 'base64url';
import { isBodySupport, TMethod } from './method-type';

const compileRestUrl = (
  url: string,
  method: TMethod,
  headers: THeaders,
  body?: string,
) => {
  const encodeUrl = base64url(url);
  const searchParams = new URLSearchParams(
    headers.map(({ key, value }) => [key, value]),
  ).toString();

  if (body && isBodySupport(method)) {
    const encodeBody = base64url(body);

    return `/restclient/${method}/${encodeUrl}/${encodeBody}?${searchParams}`;
  }

  return `/restclient/${method}/${encodeUrl}?${searchParams}`;
};

export default compileRestUrl;
