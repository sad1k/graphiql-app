import { FC } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { FormInputStyle } from './FormInputStyle';

const { input, error } = FormInputStyle;

interface IFormInput {
  label: string;
  register: object;
  type: string;
  err: string;
}

const FormInput: FC<IFormInput> = ({ label, register, type, err }) => (
  <Box>
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
  </Box>
);

export default FormInput;
