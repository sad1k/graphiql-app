'use client';

import { ReactNode } from 'react';
import isAuth from '@/hocs/isAuth';
import useHandleReactHookForm from '@/hooks/useSignUpForm';
import { Box } from '@mui/material';
import FormInput from '../FormInput/FormInput';
import AuthButtons from '../AuthButtons/AuthButtons';
import { AuthFormStyle } from '../AuthFormStyle';
import FormContainer from '../FormContainer/FormContainer';

const { form } = AuthFormStyle;

const SignIn = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit, saveAuthData } =
    useHandleReactHookForm();

  return (
    <FormContainer text='sign in'>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
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
        <AuthButtons
          text='sign up'
          isValid={isValid}
          saveAuthData={saveAuthData}
        />
      </Box>
    </FormContainer>
  );
};

export default isAuth(SignIn);
