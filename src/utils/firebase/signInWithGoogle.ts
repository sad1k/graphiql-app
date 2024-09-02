import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { IFetchUser } from '@/types/IUser';

import { auth } from './firebaseConfig';
import { getUser } from './user/getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import addUserToDb from './user/addUserToDb';
import { setTokens } from '../tokens/setTokens';

const googleProvider = new GoogleAuthProvider();

type TSignInWithGoogle = () => Promise<string | IFetchUser | null>;

export const signInWithGoogle: TSignInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;

    const isUser = await getUser(user.uid);

    if (!isUser) await addUserToDb(user, 'google');

    const newUser = await getUser(user.uid);

    if (newUser) setTokens(newUser);

    return newUser;
  } catch (error: unknown) {
    return getFirebaseErrorMessage(error);
  }
};
