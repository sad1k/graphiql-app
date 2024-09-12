import { THeaders } from '@/types/headers';
import { TMethod } from './method-type';

const getResponseResults = async (
  method: TMethod,
  url: string,
  headers: THeaders,
) => {
  const headersInit: HeadersInit = new Headers(
    headers.map(({ key, value }) => [key, value] as [string, string]),
  );
  const response = await fetch(url, {
    method,
    headers: headersInit,
  });
  const dataObj = (await response.json()) as JSON;
  const data = JSON.stringify(dataObj);
  const { status } = response;

  return { status, data };
};

export default getResponseResults;
