import parseRestUrl from '@utils/restclient/parse-rest-url';
import IRouteUrl from '@utils/restclient/route-url-interface';
import { Stack } from '@mui/material';
import RestClient from '@/views/RestClient/RestClient';

const RestClientPage = (params: IRouteUrl) => {
  const { method, url, headers } = parseRestUrl(params);

  return (
    <Stack
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>REST client</h2>
      <RestClient method={method} url={url} headers={headers} body='' />
    </Stack>
  );
};

export default RestClientPage;
