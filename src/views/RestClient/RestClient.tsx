'use client';

import { useState } from 'react';
import { Stack } from '@mui/material';
import { IRestClientInputs } from '@/types/rest-client-form';
import RestClientEditor from './RestClientEditor';
import RestClientResponse from './RestClientResponse';

const INITIAL_STATUS = 0;

const RestClient = ({ method, url, headers }: IRestClientInputs) => {
  const [response, setResponse] = useState<string>('');
  const [status, setStatus] = useState<number>(INITIAL_STATUS);

  return (
    <Stack
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>REST client</h2>
      <RestClientEditor
        method={method}
        url={url}
        headers={headers}
        body=''
        setResponse={setResponse}
        setStatus={setStatus}
      />
      <RestClientResponse data={response} status={status} />
    </Stack>
  );
};

export default RestClient;
