import { ComponentType, useLayoutEffect } from 'react';
import useAuthData from '@/hooks/useAuthData';
import { signInWithToken } from '@/utils/firebase/signInWithToken';
import notification from '@/utils/notification/notification';
import { getTokens } from '@/utils/tokens/getTokens';

const withTokenSignIn =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    const { saveAuthData, removeAuthData } = useAuthData();

    const { refreshToken } = getTokens();

    const signIn = async () => {
      if (refreshToken) {
        const user = await signInWithToken(refreshToken);

        if (user) saveAuthData(user);
      } else {
        removeAuthData();
      }
    };

    useLayoutEffect(() => {
      signIn().catch((err: Error) => notification('error', err.message));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshToken]);

    return refreshToken ? <Component {...props} /> : null;
  };

export default withTokenSignIn;
