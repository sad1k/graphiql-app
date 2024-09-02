import { signInWithEmailAndPassword } from 'firebase/auth';
import { IFetchUser } from '@/types/IUser';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { getUser } from './user/getUser';
import { setTokens } from '../tokens/setTokens';

type TSignIn = (
  email: string,
  password: string,
) => Promise<IFetchUser | string | null>;

export const signIn: TSignIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const { user } = res;

    const newUser = await getUser(user.uid);

    if (newUser) {
      setTokens(newUser);

      return newUser;
    }
    return 'Wrong email or Password';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
