import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpUser } from '@/types/IUser';
import { SignUpSchema } from '@/utils/validation/userSchema';
import { signUp } from '@/utils/firebase/signUp';
import { HOME } from '@/constants/path';

import useSaveAuthData from './useAuthData';

const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ISignUpUser>({
    resolver: yupResolver(SignUpSchema),
    mode: 'onChange',
  });
  const { saveAuthData } = useSaveAuthData();

  const onSubmit: SubmitHandler<ISignUpUser> = async ({
    name,
    email,
    password,
  }) => {
    const newUser = await signUp(name, email, password);

    if (newUser) {
      saveAuthData(newUser, HOME);
      reset();
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit, saveAuthData };
};

export default useSignUpForm;
