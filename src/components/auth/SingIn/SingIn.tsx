'use client';

import { ReactNode } from 'react';
import { Box } from '@mui/material';
import useSignInForm from '@/hooks/useSignInForm';
import isAuth from '@/hocs/isAuth';
import { SIGN_UP } from '@/constants/path';
import { useTranslations } from 'next-intl';
import FormInput from '../FormInput/FormInput';
import AuthButtons from '../AuthButtons/AuthButtons';
import { AuthFormStyle } from '../AuthFormStyle';
import FormContainer from '../FormContainer/FormContainer';

const { form } = AuthFormStyle;

const SignIn = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit } = useSignInForm();

  const t = useTranslations('Auth');

  return (
    <FormContainer text={t('signIn')} href={SIGN_UP} linkText={t('signUp')}>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label={t('signIn')}
          type='email'
          name='email'
          register={register}
          err={errors.email?.message || ''}
        />
        <FormInput
          label={t('password')}
          type='password'
          name='password'
          register={register}
          err={errors.password?.message || ''}
        />
        <AuthButtons text={t('signIn')} isValid={isValid} or={t('or')} />
      </Box>
    </FormContainer>
  );
};

export default isAuth(SignIn);
