import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFetchUser, ISignUpUser } from '@/types/IUser';
import { SignUpSchema } from '@/utils/validation/userSchema';
import notification from '@/utils/notification/notification';
import { signUp } from '@/utils/firebase/signUp';

import useSaveAuthData from './useSaveAuthData';

const useAuthUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ISignUpUser>({
    resolver: yupResolver(SignUpSchema),
    mode: 'onChange',
  });
  const [dispatchAuthUser] = useSaveAuthData();

  const saveAuthData = (newUser: IFetchUser | string) => {
    typeof newUser !== 'string'
      ? dispatchAuthUser(newUser)
      : notification('error', newUser);
  };

  const onSubmit: SubmitHandler<ISignUpUser> = async ({
    name,
    email,
    password,
  }) => {
    const newUser = await signUp(name, email, password);

    if (newUser) saveAuthData(newUser);
    reset();
  };

  return { register, handleSubmit, errors, isValid, onSubmit, saveAuthData };
};

export default useAuthUpForm;
