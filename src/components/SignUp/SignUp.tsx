'use client';

import { ReactNode } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Box, Button, Grid, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { ISignUpUser } from '@/types/IUser';
import { SignUpSchema } from '@/utils/validation/userSchema';

import { userFormStyle } from './UserFormStyle';
import FormInput from '../FormInput/FormInput';

const { form, buttonContainer, button, title, icon, container } = userFormStyle;

const SignUp = (): ReactNode => {
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
    <Grid container sx={container}>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h3' component='h2' sx={title}>
          SignUp
        </Typography>
        <FormInput
          label='Name'
          type='text'
          register={{ ...register('name') }}
          err={errors.name?.message || ''}
        />
        <FormInput
          label='Email'
          type='email'
          register={{ ...register('email') }}
          err={errors.email?.message || ''}
        />
        <FormInput
          label='Password'
          type='password'
          register={{ ...register('password') }}
          err={errors.password?.message || ''}
        />
        <FormInput
          label='Confirm Password'
          type='password'
          register={{ ...register('confirmPassword') }}
          err={errors.confirmPassword?.message || ''}
        />

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
