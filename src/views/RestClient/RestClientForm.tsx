'use client';

import { IRestClientForm } from '@/types/rest-client-form';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import compileRestUrl from '@/utils/restclient/compile-rest-url';
import MethodSelect from './MethodSelect';
import UrlInput from './UrlInput';
import HeadersTable from './HeadersTable';
import SubmitButton from './SubmitButton';

const RestClientForm = ({ method, url, headers }: IRestClientForm) => {
  const methods = useForm<IRestClientForm>({ mode: 'all' });
  const router = useRouter();
  const onSubmit: SubmitHandler<IRestClientForm> = (data) => {
    const newRoute = compileRestUrl(data.url, data.method, data.headers);

    router.push(newRoute);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            {/* TODO: add JSON/Text Editor (the same component in response) */}
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default RestClientForm;
