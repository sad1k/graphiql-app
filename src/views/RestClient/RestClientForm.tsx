'use client';

import { IRestClientForm, IRestClientInputs } from '@/types/rest-client-form';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import compileRestUrl from '@/utils/restclient/compile-rest-url';
import { useEffect } from 'react';
import executeRequest from '@/utils/restclient/execute-request';
import CodeField from '@/hocs/CodeField';
import MethodSelect from './MethodSelect';
import UrlInput from './UrlInput';
import HeadersTable from './HeadersTable';
import SubmitButton from './SubmitButton';

const RestClientForm = ({
  method,
  url,
  headers,
  body,
  setResponse,
  setStatus,
}: IRestClientForm) => {
  const methods = useForm<IRestClientInputs>({ mode: 'all' });
  const router = useRouter();

  const onSubmit: SubmitHandler<IRestClientInputs> = (data) => {
    const newRoute = compileRestUrl(
      data.url,
      data.method,
      data.headers,
      data.body,
    );

    executeRequest({
      method: data.method,
      url: data.url,
      headers: data.headers,
      body: data.body,
      setStatus,
      setResponse,
    });
    router.push(newRoute);
  };

  useEffect(() => {
    executeRequest({
      method,
      url,
      headers,
      body,
      setStatus,
      setResponse,
    });
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={() => {
          void methods.handleSubmit(onSubmit);
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>RestClient Editor</h3>
          </Grid>

          <MethodSelect initialValue={method} xs={2} />
          <UrlInput initialUrl={url} xs={8} />
          <SubmitButton xs={2} />

          <Grid item xs={12}>
            <h4>Headers: </h4>
          </Grid>

          <HeadersTable initialHeaders={headers} xs={12} />

          <Grid item xs={12}>
            <h4>Body </h4>
            <CodeField initialValue={body} isInForm />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default RestClientForm;
