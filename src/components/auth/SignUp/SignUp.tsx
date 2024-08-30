'use client';

import { ReactNode } from 'react';
import isAuth from '@/hocs/isAuth';
import useHandleReactHookForm from '@/hooks/useSignUpForm';
import { Box } from '@mui/material';
import FormInput from '../FormInput/FormInput';
import AuthButtons from '../AuthButtons/AuthButtons';
import { userFormStyle } from './UserFormStyle';
import FormContainer from '../FormContainer/FormContainer';

const { form } = userFormStyle;

const SignUp = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit, saveAuthData } =
    useHandleReactHookForm();

  return (
    <FormContainer text='sign up'>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
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
    </FormContainer>
  );
};

export default isAuth(SignUp);
