'use client';

import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import isAuth from '@/HOC/isAuth';
import useHandleReactHookForm from '@/hooks/useSignUpForm';

import { Box, Grid, Typography } from '@mui/material';
import FormInput from '../FormInput/FormInput';
import AuthButtons from '../AuthButtons/AuthButtons';

import { userFormStyle } from './UserFormStyle';
import 'react-toastify/dist/ReactToastify.css';

const { form, title, container } = userFormStyle;

const SignUp = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit, saveAuthData } =
    useHandleReactHookForm();

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

        <AuthButtons
          text='sign up'
          isValid={isValid}
          saveAuthData={saveAuthData}
        />
      </Box>
      <ToastContainer />
    </Grid>
  );
};

export default isAuth(SignUp);
