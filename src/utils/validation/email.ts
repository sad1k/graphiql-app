import * as yup from 'yup';

const email = yup
  .string()
  .email('Invalid email address')
  .required('Email is required');

export default email;
