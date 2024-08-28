import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { setCookie } from 'cookies-next';

import { db } from './firebaseConfig';
import { convertDataToMs } from '../data/convertDataToMs';

const addUserToDb = async (user: User, authProvider: string, name?: string) => {
  const accessToken = await user.getIdTokenResult();

  const expirationTime = convertDataToMs(accessToken.expirationTime);

  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name: user.displayName ? user.displayName : name,
    authProvider,
    email: user.email,
    accessToken: accessToken.token,
    refreshToken: user.refreshToken,
    expirationTime,
  });
  setCookie('access-token', accessToken.token, { maxAge: expirationTime });
  setCookie('refresh-token', user.refreshToken);
};

export default addUserToDb;
