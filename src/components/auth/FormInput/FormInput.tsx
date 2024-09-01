import { Box, TextField, Typography } from '@mui/material';
import { memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { FormInputStyle } from './FormInputStyle';

const { input, error } = FormInputStyle;

interface IFormInput<T extends FieldValues> {
  name: Path<T>;
  label: string;
  register?: UseFormRegister<T>;
  type: string;
  err: string;
}

const FormInput = <T extends FieldValues>({
  name,
  label,
  register,
  type,
  err,
}: IFormInput<T>) => (
  <Box>
    <TextField
      label={label}
      {...(register ? register(name) : { name })}
      type={type}
      size='small'
      sx={input}
    />
    <Typography variant='inherit' component='p' sx={error}>
      {err}
    </Typography>
  </Box>
);

const MemoizedFormInput = memo(FormInput) as <T extends FieldValues>({
  name,
  label,
  register,
  type,
  err,
}: IFormInput<T>) => JSX.Element;

export default MemoizedFormInput;
