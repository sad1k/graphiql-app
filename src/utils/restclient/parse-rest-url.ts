import { TSearchParam, TSearchParams } from '@/types/search-params';
import { THeaders } from '@/types/headers';
import base64url from 'base64url';
import { DEFAULT_METHOD, isMethod } from './method-type';
import IRouteUrl from './route-url-interface';

const URL_POSITION = 1;
const BODY_POSITION = 2;

const getMethod = (slug: string[]) => {
  let method = DEFAULT_METHOD;

  if (slug.length > 0) {
    if (isMethod(slug[0])) {
      [method] = slug;
    } else {
      throw Error('Invalid method type');
    }
  }

  return method;
};

const getUrl = (slug: string[]) => {
  let url = '';

  if (slug.length > URL_POSITION) {
    const [_method, encodedUrl, ..._other] = slug;

    url = base64url.decode(encodedUrl);
  }

  return url;
};

const getHeaders = (searchParams: TSearchParams): THeaders => {
  const parseSingleValue = (key: string, value: string | undefined) => ({
    key,
    value: value || '',
  });

  const parseMultiplyValue = (key: string, values: string[]) =>
    values.map((value) => ({
      key,
      value,
    }));

  const parseSearchParam = ([key, value]: [string, TSearchParam]) => {
    if (typeof value === 'string' || !value) {
      return parseSingleValue(key, value);
    }

    return parseMultiplyValue(key, value);
  };

  const headers = Object.entries(searchParams).flatMap(parseSearchParam);

  return headers;
};

const getBody = (slug: string[]): string => {
  let body = '';

  if (slug.length > BODY_POSITION) {
    const [_method, _encodedUrl, encodedBody] = slug;

    body = base64url.decode(encodedBody);
  }

  return body;
};

const parseRestUrl = ({ params, searchParams }: IRouteUrl) => {
  const { slug } = params;

  const method = getMethod(slug);
  const url = getUrl(slug);
  const body = getBody(slug);
  const headers = getHeaders(searchParams);
  return { method, url, headers, body };
};

export default parseRestUrl;
