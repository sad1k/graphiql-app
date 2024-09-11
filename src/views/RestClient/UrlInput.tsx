'use client';

import { IRestClientForm } from '@/types/rest-client-form';
import { Grid, GridSize, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface IUrlInput {
  initialUrl: string;
  xs?: boolean | GridSize;
}

const UrlInput = ({ initialUrl, xs }: IUrlInput) => {
  const { control } = useFormContext<IRestClientForm>();

  return (
    <Grid item xs={xs}>
      <Controller
        name='url'
        control={control}
        defaultValue={initialUrl}
        render={({ field }) => (
          <TextField
            {...field}
            id='url-input'
            variant='outlined'
            fullWidth
            placeholder='Enter URL'
          />
        )}
      />
    </Grid>
  );
};

export default UrlInput;
