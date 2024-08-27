import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

export const logIn = async (
  email: string,
  password: string,
): Promise<string | void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
