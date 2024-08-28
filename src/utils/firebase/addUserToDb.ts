import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { db } from './firebaseConfig';
import { convertDataToMs } from '../data/convertDataToMs';
import { setTokens } from '../tokens/setTokens';

type TAddUserToDb = (
  user: User,
  authProvider: string,
  name?: string,
) => Promise<void>;

const addUserToDb: TAddUserToDb = async (user, authProvider, name?) => {
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

  setTokens(accessToken.token, expirationTime, user.refreshToken);
};

export default addUserToDb;
