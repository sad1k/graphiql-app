import * as yup from 'yup';

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 32;

const password = yup
  .string()
  .required('Password is required')
  .min(
    MIN_PASSWORD_LENGTH,
    `Should contain at least ${MIN_PASSWORD_LENGTH} symbols`,
  )
  .max(MAX_PASSWORD_LENGTH, `Max length is ${MAX_PASSWORD_LENGTH} symbols`)
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(
    /[$&+,:;=?@#|'<>.^*()%!-]/,
    'Password must contain at least one special character',
  );

export default password;
