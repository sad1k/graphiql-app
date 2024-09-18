'use client';

import { ReactNode } from 'react';
import { Box } from '@mui/material';
import useSignInForm from '@/hooks/useSignInForm';
import isAuth from '@/hocs/isAuth';
import { SIGN_UP } from '@/constants/path';
import FormInput from '../FormInput/FormInput';
import AuthButtons from '../AuthButtons/AuthButtons';
import { AuthFormStyle } from '../AuthFormStyle';
import FormContainer from '../FormContainer/FormContainer';

const { form } = AuthFormStyle;

const SignIn = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit } = useSignInForm();

  return (
    <FormContainer text='sign in' href={SIGN_UP} linkText='Sign Up'>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          register={register}
          err={errors.email?.message || ''}
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          register={register}
          err={errors.password?.message || ''}
        />
        <AuthButtons text='sign in' isValid={isValid} />
      </Box>
    </FormContainer>
  );
};

export default isAuth(SignIn);
