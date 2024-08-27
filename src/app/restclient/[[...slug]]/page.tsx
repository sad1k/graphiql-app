import parseRestUrl from '@/utils/restclient/parse-rest-url';
import IRouteUrl from '@/utils/restclient/route-url-interface';
import RestClientEditor from '@/views/RestClient/RestClientEditor';
import RestClientResponse from '@/views/RestClient/RestClientResponse';
import { Stack } from '@mui/material';

const RestClient = async (params: IRouteUrl) => {
  const { method, url } = parseRestUrl(params);
  const data = await fetch(url);

  console.log(data);

  console.log(method);

  return (
    <Stack
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>REST client</h2>
      <RestClientEditor method={method} url={url} />
      <RestClientResponse />
    </Stack>
  );
};

export default RestClient;
