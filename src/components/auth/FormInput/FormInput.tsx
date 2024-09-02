import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { memo, useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { FormInputStyle } from './FormInputStyle';

const { input, error } = FormInputStyle;

interface IFormInput<T extends FieldValues> {
  name: Path<T>;
  label: string;
  register?: UseFormRegister<T>;
  type: string;
  err: string;
}

const FormInput = <T extends FieldValues>(props: IFormInput<T>) => {
  const { name, label, register, type, err } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <TextField
        label={label}
        {...(register ? register(name) : { name })}
        type={type === 'password' && showPassword ? 'text' : type}
        size='small'
        sx={input}
        InputProps={
          type === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
      <Typography variant='inherit' component='p' sx={error}>
        {err}
      </Typography>
    </Box>
  );
};

const MemoizedFormInput = memo(FormInput) as <T extends FieldValues>(
  props: IFormInput<T>,
) => JSX.Element;

export default MemoizedFormInput;
