import { THeaders } from '@/types/headers';
import { TMethod } from './method-type';

const getResponseResults = async (
  method: TMethod,
  url: string,
  headers: THeaders,
) => {
  const response = await fetch(url, {
    method,
    headers: headers.map(({ key, value }) => [key, value]),
  });
  const dataObj = (await response.json()) as JSON;
  const data = JSON.stringify(dataObj);
  const { status } = response;

  return { status, data };
};

export default getResponseResults;
