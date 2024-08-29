'use client';

import { TextField } from '@mui/material';

interface IUrlInput {
  initialUrl: string;
}

const UrlInput = ({ initialUrl }: IUrlInput) => (
  <TextField
    id='url-input'
    variant='outlined'
    fullWidth
    defaultValue={initialUrl}
    placeholder='Enter URL'
  />
);

export default UrlInput;
