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

const SignUp = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit } =
    useHandleReactHookForm();

  return (
    <FormContainer text='sign up'>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label='Name'
          type='text'
          name='name'
          register={register}
          err={errors.name?.message || ''}
        />
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
        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          register={register}
          err={errors.confirmPassword?.message || ''}
        />

        <AuthButtons text='sign up' isValid={isValid} />
      </Box>
    </FormContainer>
  );
};

export default isAuth(SignUp);
