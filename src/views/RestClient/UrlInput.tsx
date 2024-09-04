'use client';

import { Grid, GridSize, TextField } from '@mui/material';

interface IUrlInput {
  initialUrl: string;
  xs?: boolean | GridSize;
}

const UrlInput = ({ initialUrl, xs }: IUrlInput) => (
  <Grid item xs={xs}>
    <TextField
      id='url-input'
      variant='outlined'
      fullWidth
      defaultValue={initialUrl}
      placeholder='Enter URL'
    />
  </Grid>
);

export default UrlInput;
