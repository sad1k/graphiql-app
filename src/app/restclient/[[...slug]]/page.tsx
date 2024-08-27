import parseRestUrl from '@/utils/restclient/parse-rest-url';
import IRouteUrl from '@/utils/restclient/route-url-interface';
import RestClientEditor from '@/views/RestClient/RestClientEditor';
import RestClientResponse from '@/views/RestClient/RestClientResponse';
import { Stack } from '@mui/material';

const RestClient = async (params: IRouteUrl) => {
  const { method, url, headers } = parseRestUrl(params);
  const response = await fetch(url);
  const dataObj = (await response.json()) as JSON;
  const data = JSON.stringify(dataObj);
  const { status } = response;

  return (
    <Stack
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>REST client</h2>
      <RestClientEditor method={method} url={url} headers={headers} />
      <RestClientResponse data={data} status={status} />
    </Stack>
  );
};

export default RestClient;
