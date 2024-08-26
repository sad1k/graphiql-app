import * as yup from 'yup';
import name from './name';
import email from './email';
import password from './password';
import confirmPassword from './confirmPassword';

export const SignUpSchema = yup.object().shape({
  name,
  email,
  password,
  confirmPassword,
});

export const LoginSchema = yup.object().shape({
  email,
  password,
});
