import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

type TLogOut = () => Promise<string | void>;

export const logout: TLogOut = async () => {
  try {
    await signOut(auth);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
