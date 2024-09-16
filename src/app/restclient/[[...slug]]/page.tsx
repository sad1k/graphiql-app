import parseRestUrl from '@utils/restclient/parse-rest-url';
import IRouteUrl from '@utils/restclient/route-url-interface';
import RestClient from '@/views/RestClient/RestClient';

const RestClientPage = (params: IRouteUrl) => {
  const { method, url, headers, body } = parseRestUrl(params);

  return <RestClient method={method} url={url} headers={headers} body={body} />;
};

export default RestClientPage;
