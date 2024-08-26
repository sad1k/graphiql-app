'use client';

import { ReactNode } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { ISignUpUser } from '@/types/IUser';
import { SignUpSchema } from '@/utils/validation/userSchema';

import { userFormStyle } from './UserFormStyle';

const { form, buttonContainer, button, title, icon, error } = userFormStyle;

const InputErrorMessage = ({ err }: { err: string }) => (
  <Typography variant='inherit' component='p' sx={error}>
    {err || ''}
  </Typography>
);

const SignUp = (): ReactNode => {
  const matches = useMediaQuery('(min-width:600px)', { noSsr: true });

  let containerWidth = '500px';

  if (!matches) containerWidth = '100%';

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignUpUser>({
    resolver: yupResolver(SignUpSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ISignUpUser> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <Grid
      container
      rowSpacing={2}
      sx={{ p: '0 1rem', width: containerWidth, m: 'auto' }}
    >
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h3' component='h2' sx={title}>
          SignUp
        </Typography>
        <Grid item xs={12}>
          <TextField
            label='Name'
            {...register('name')}
            type='text'
            size='small'
            sx={button}
          />
          <InputErrorMessage err={errors.name?.message || ''} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Email'
            {...register('email')}
            type='email'
            size='small'
            sx={button}
          />{' '}
          <InputErrorMessage err={errors.email?.message || ''} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Password'
            {...register('password')}
            type='password'
            size='small'
            sx={button}
          />{' '}
          <InputErrorMessage err={errors.password?.message || ''} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Confirm Password'
            {...register('confirmPassword')}
            type='password'
            size='small'
            sx={button}
          />
          <InputErrorMessage err={errors.confirmPassword?.message || ''} />
        </Grid>

        <Grid item xs={12} sx={buttonContainer}>
          <Button
            type='submit'
            variant='contained'
            sx={button}
            disabled={!isValid}
          >
            sign up
          </Button>
          <Typography variant='body1' component='p' sx={title}>
            OR
          </Typography>

          <Button type='button' variant='contained' sx={button}>
            <GoogleIcon sx={icon} />
            authorization with google
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SignUp;
