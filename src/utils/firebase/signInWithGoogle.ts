import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, db } from './firebaseConfig';
import { getUser } from './getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<string | boolean> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;

    const isUser = await getUser(user.uid);

    if (!isUser) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google ',
        email: user.email,
      });
    }

    return !isUser;
  } catch (error: unknown) {
    return getFirebaseErrorMessage(error);
  }
};
