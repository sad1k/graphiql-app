'use client';

import { ReactNode } from 'react';
import isAuth from '@/hocs/isAuth';
import useSignUpForm from '@/hooks/useSignUpForm';
import { Box } from '@mui/material';
import { SIGN_IN } from '@/constants/path';
import { useTranslations } from 'next-intl';
import FormInput from '../FormInput/FormInput';
import AuthButtons from '../AuthButtons/AuthButtons';
import { AuthFormStyle } from '../AuthFormStyle';
import FormContainer from '../FormContainer/FormContainer';

const { form } = AuthFormStyle;

const SignUp = (): ReactNode => {
  const { register, handleSubmit, errors, isValid, onSubmit } = useSignUpForm();

  const t = useTranslations('Auth');

  return (
    <FormContainer text={t('signUp')} href={SIGN_IN} linkText={t('signIn')}>
      <Box component='form' sx={form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label={t('name')}
          type='text'
          name='name'
          register={register}
          err={errors.name?.message || ''}
        />
        <FormInput
          label={t('email')}
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
        <FormInput
          label={t('confirmPassword')}
          type='password'
          name='confirmPassword'
          register={register}
          err={errors.confirmPassword?.message || ''}
        />

        <AuthButtons text={t('signUp')} isValid={isValid} or={t('or')} />
      </Box>
    </FormContainer>
  );
};

export default isAuth(SignUp);
