import { ComponentType, useLayoutEffect } from 'react';
import useSaveAuthData from '@/hooks/useSaveAuthData';
import { signInWithToken } from '@/utils/firebase/signInWithToken';
import notification from '@/utils/notification/notification';
import { getTokens } from '@/utils/tokens/getTokens';
import { useRouter } from 'next/navigation';

const withTokenSignIn =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    const [saveAuthData] = useSaveAuthData();

    const { refreshToken } = getTokens();

    const signIn = async () => {
      if (refreshToken) {
        const user = await signInWithToken(refreshToken);

        if (user) saveAuthData(user);
      } else {
        router.push('/signin');
      }
    };

    useLayoutEffect(() => {
      signIn().catch((err: Error) => notification('error', err.message));
    }, [refreshToken]);

    return refreshToken ? <Component {...props} /> : null;
  };

export default withTokenSignIn;
