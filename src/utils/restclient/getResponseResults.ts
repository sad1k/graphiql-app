import { THeaders } from '@/types/headers';
import { TMethod } from './method-type';

const getResponseResults = async (
  method: TMethod,
  url: string,
  headers: THeaders,
  body: string,
) => {
  const METHODS_WITH_BODY: TMethod[] = ['POST', 'PUT', 'PATCH'];
  const headersInit: HeadersInit = new Headers(
    headers.map(({ key, value }) => [key, value] as [string, string]),
  );
  const requestOptions: RequestInit = {
    method,
    headers: headersInit,
    ...(METHODS_WITH_BODY.includes(method) && { body }),
  };
  const response = await fetch(url, requestOptions);
  const dataObj = (await response.json()) as JSON;
  const data = JSON.stringify(dataObj);
  const { status } = response;

  return { status, data };
};

export default getResponseResults;
