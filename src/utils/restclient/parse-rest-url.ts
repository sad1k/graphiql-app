import { DEFAULT_METHOD, isMethod } from './method-type';
import IRouteUrl from './route-url-interface';

const parseRestUrl = ({ params, searchParams: _searchParams }: IRouteUrl) => {
  let method = DEFAULT_METHOD;
  let url = '';
  const { slug } = params;

  if (slug.length > 0) {
    if (isMethod(slug[0])) {
      [method] = slug;
    } else {
      throw Error('Invalid method type');
    }
  }

  if (slug.length > 1) {
    const [_method, encodedUrl] = slug;

    url = atob(encodedUrl);
  }

  return { method, url };
};

export default parseRestUrl;
