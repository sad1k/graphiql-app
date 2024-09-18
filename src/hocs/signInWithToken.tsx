import { ComponentType, useLayoutEffect } from 'react';
import useAuthData from '@/hooks/useAuthData';
import { signInWithToken } from '@/utils/firebase/signInWithToken';
import notification from '@/utils/notification/notification';
import { getTokens } from '@/utils/tokens/getTokens';
import { redirect } from 'next/navigation';
import { SIGN_IN } from '@/constants/path';
import { useAppSelector } from '@/utils/store/hooks';

const withTokenSignIn =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    const { saveAuthData, removeAuthData } = useAuthData();

    const authState = useAppSelector((state) => state.auth.authState);

    const { refreshToken } = getTokens();

    const signIn = async () => {
      if (authState) return;
      if (!refreshToken) redirect(SIGN_IN);

      if (refreshToken) {
        const user = await signInWithToken(refreshToken);

        if (user) saveAuthData(user);
      } else {
        removeAuthData();
      }
    };

    useLayoutEffect(() => {
      signIn().catch((err: Error) => notification('error', err.message));
    }, [refreshToken]);

    return refreshToken ? <Component {...props} /> : null;
  };

export default withTokenSignIn;
