import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

export const logout = async (): Promise<string | void> => {
  try {
    await signOut(auth);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
