import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpUser, ISignInUser } from '@/types/IUser';
import { SignInSchema } from '@/utils/validation/userSchema';
import { signUp } from '@/utils/firebase/signUp';

import useSaveAuthData from './useSaveAuthData';

const useAuthUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ISignInUser>({
    resolver: yupResolver(SignInSchema),
    mode: 'onChange',
  });
  const [saveAuthData] = useSaveAuthData();

  const onSubmit: SubmitHandler<ISignUpUser> = async ({
    name,
    email,
    password,
  }) => {
    const newUser = await signUp(name, email, password);

    if (newUser) saveAuthData(newUser);
    reset();
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};

export default useAuthUpForm;
