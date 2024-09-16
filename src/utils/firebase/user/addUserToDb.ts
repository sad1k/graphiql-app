import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { db } from '../firebaseConfig';
import getUserAccessToken from './getUserAccessToken';

type TAddUserToDb = (
  user: User,
  authProvider: string,
  name?: string,
) => Promise<void>;

const addUserToDb: TAddUserToDb = async (user, authProvider, name?) => {
  const { accessToken, expirationTime } = await getUserAccessToken(user);

  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name: user.displayName ? user.displayName : name,
    authProvider,
    email: user.email,
    accessToken: accessToken.token,
    refreshToken: user.refreshToken,
    expirationTime,
  });
};

export default addUserToDb;
