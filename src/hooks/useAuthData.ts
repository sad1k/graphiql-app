import { SIGN_IN } from '@/constants/path';
import { IFetchUser } from '@/types/IUser';
import notification from '@/utils/notification/notification';
import { useAppDispatch } from '@/utils/store/hooks';
import { removeAuthState, setAuthState } from '@/utils/store/slices/userSlice';
import { removeTokens } from '@/utils/tokens/removeTokens';
import { useRouter } from 'next/navigation';

const useAuthData = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const dispatchAuthUser = (newUser: IFetchUser) => {
    dispatch(setAuthState(newUser));
  };

  const saveAuthData = (newUser: IFetchUser | string, path?: string) => {
    if (typeof newUser !== 'string') {
      dispatchAuthUser(newUser);
      if (path) router.push(path);
    } else notification('error', newUser);
  };

  const removeAuthData = () => {
    dispatch(removeAuthState());
    removeTokens();
    router.push(SIGN_IN);
  };

  return [saveAuthData, removeAuthData] as const;
};

export default useAuthData;
