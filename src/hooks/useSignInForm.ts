import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignInUser } from '@/types/IUser';
import { SignInSchema } from '@/utils/validation/userSchema';
import { signIn } from '@/utils/firebase/signIn';

import { useRouter } from 'next/navigation';
import useSaveAuthData from './useSaveAuthData';

const useSignInForm = () => {
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
  const router = useRouter();

  const onSubmit: SubmitHandler<ISignInUser> = async ({ email, password }) => {
    const newUser = await signIn(email, password);

    if (newUser && typeof newUser !== 'string') {
      saveAuthData(newUser);
      router.push('/');
    }
    reset();
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};

export default useSignInForm;
