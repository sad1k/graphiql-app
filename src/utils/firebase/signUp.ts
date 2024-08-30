import { IFetchUser } from '@/types/IUser';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

import { getUser } from './getUser';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import addUserToDb from './addUserToDb';

type TSignUp = (
  name: string,
  email: string,
  password: string,
) => Promise<IFetchUser | string | null>;

export const signUp: TSignUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;

    await addUserToDb(user, 'local', name);

    const newUser = await getUser(user.uid);

    return newUser;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
