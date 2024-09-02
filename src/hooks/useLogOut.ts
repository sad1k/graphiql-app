import { useAppDispatch } from '@/utils/store/hooks';
import { removeAuthState } from '@/utils/store/slices/userSlice';
import { removeTokens } from '@/utils/tokens/removeTokens';
import { useRouter } from 'next/navigation';

const useSaveAuthData = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const removeAuthData = () => {
    dispatch(removeAuthState());

    removeTokens();
    router.push('/signin');
  };

  return [removeAuthData] as const;
};

export default useSaveAuthData;
