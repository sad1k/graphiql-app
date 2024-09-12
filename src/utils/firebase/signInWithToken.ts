import { IFetchUser } from '@/types/IUser';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

type TSignInWithToken = (
  refreshToken: string,
) => Promise<IFetchUser | string | null>;

export const signInWithToken: TSignInWithToken = async (refreshToken) => {
  try {
    const q = query(
      collection(db, 'users'),
      where('refreshToken', '==', refreshToken),
    );

    const docs = await getDocs(q);

    return docs.docs.length !== 0 ? (docs.docs[0].data() as IFetchUser) : null;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
