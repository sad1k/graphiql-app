import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { removeTokens } from '../tokens/removeTokens';

type TLogOut = () => Promise<string | void>;

export const logout: TLogOut = async () => {
  try {
    await signOut(auth);

    return removeTokens();
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
