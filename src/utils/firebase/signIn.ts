import { signInWithEmailAndPassword } from 'firebase/auth';
import { IFetchUser } from '@/types/IUser';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { getUser } from './getUser';

type TSignIn = (
  email: string,
  password: string,
) => Promise<IFetchUser | string | null>;

export const signIn: TSignIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const { user } = res;

    const newUser = await getUser(user.uid);

    return newUser;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
