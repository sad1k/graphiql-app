'use client';

import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { IRestClientInputs } from '@/types/rest-client-form';
import { useAppSelector } from '@/utils/store/hooks';
import { HOME } from '@/constants/path';
import { redirect } from 'next/navigation';
import RestClientResponse from './RestClientResponse';
import RestClientEditor from './RestClientEditor';

const INITIAL_STATUS = 0;

const RestClient = ({ method, url, headers, body }: IRestClientInputs) => {
  const [response, setResponse] = useState<string>('');
  const [status, setStatus] = useState<number>(INITIAL_STATUS);
  const authState = useAppSelector((state) => state.auth.authState);

  useEffect(() => {
    if (!authState) {
      redirect(HOME);
    }
  }, []);

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
        body={body}
        setResponse={setResponse}
        setStatus={setStatus}
      />
      <RestClientResponse data={response} status={status} />
    </Stack>
  );
};

export default RestClient;
