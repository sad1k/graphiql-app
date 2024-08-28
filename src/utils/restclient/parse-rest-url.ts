import { TSearchParam, TSearchParams } from '@/types/search-params';
import { THeaders } from '@/types/headers';
import { DEFAULT_METHOD, isMethod } from './method-type';
import IRouteUrl from './route-url-interface';

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

  if (slug.length > 1) {
    const [_method, encodedUrl] = slug;

    url = atob(encodedUrl);
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

const parseRestUrl = ({ params, searchParams }: IRouteUrl) => {
  const { slug } = params;

  const method = getMethod(slug);
  const url = getUrl(slug);
  const headers = getHeaders(searchParams);

  return { method, url, headers };
};

export default parseRestUrl;
