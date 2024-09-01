import { IFetchUser } from '@/types/IUser';
import notification from '@/utils/notification/notification';
import { useAppDispatch } from '@/utils/store/hooks';
import { setAuthState } from '@/utils/store/slices/userSlice';
import { useRouter } from 'next/navigation';

const useSaveAuthData = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const dispatchAuthUser = (newUser: IFetchUser) => {
    dispatch(setAuthState(newUser));
    router.push('/');
  };

  const saveAuthData = (newUser: IFetchUser | string) => {
    typeof newUser !== 'string'
      ? dispatchAuthUser(newUser)
      : notification('error', newUser);
  };

  return [saveAuthData] as const;
};

export default useSaveAuthData;
