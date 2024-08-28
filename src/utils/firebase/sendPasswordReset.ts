import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

type TSendPasswordReset = (email: string) => Promise<string | void>;
export const sendPasswordReset: TSendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
