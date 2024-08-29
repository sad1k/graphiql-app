import { IFetchUser } from '@/types/IUser';
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

  return [dispatchAuthUser] as const;
};

export default useSaveAuthData;
