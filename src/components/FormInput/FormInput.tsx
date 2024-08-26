import { Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { FormInputStyle } from './FormInputStyle';

const { input, error } = FormInputStyle;

interface IFormInput {
  label: string;
  register: object;
  type: string;
  err: string;
}

const FormInput: FC<IFormInput> = ({ label, register, type, err }) => (
  <Grid item xs={12}>
    <TextField
      label={label}
      {...register}
      type={type}
      size='small'
      sx={input}
    />
    <Typography variant='inherit' component='p' sx={error}>
      {err || ''}
    </Typography>
  </Grid>
);

export default FormInput;
