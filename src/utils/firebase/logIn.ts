import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

type TLogIn = (email: string, password: string) => Promise<string | void>;

export const logIn: TLogIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
