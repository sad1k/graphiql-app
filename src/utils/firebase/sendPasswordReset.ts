import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

export const sendPasswordReset = async (
  email: string,
): Promise<string | void> => {
  try {
    await sendPasswordResetEmail(auth, email);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
