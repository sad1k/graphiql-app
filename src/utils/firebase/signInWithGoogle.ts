import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { IFetchUser } from '@/types/IUser';

import { auth } from './firebaseConfig';
import { getUser } from './getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import addUserToDb from './addUserToDb';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<
  string | IFetchUser | null
> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;

    const isUser = await getUser(user.uid);

    if (!isUser) await addUserToDb(user, 'google');

    const newUser = await getUser(user.uid);

    return newUser;
  } catch (error: unknown) {
    return getFirebaseErrorMessage(error);
  }
};
