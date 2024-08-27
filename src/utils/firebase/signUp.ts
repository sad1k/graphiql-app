import { IFetchUser } from '@/types/IUser';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

import { getUser } from './getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

export const signUp = async (
  name: string,
  email: string,
  password: string,
): Promise<IFetchUser | string | null> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;

    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });

    const newUser = await getUser(user.uid);

    return newUser;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
