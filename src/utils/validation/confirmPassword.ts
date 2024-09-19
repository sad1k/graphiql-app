import * as yup from 'yup';

const confirmPassword = yup
  .string()
  .required('Please confirm password')
  .oneOf([yup.ref('password')], 'Passwords should match');

export default confirmPassword;
