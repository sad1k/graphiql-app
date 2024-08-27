import { IFetchUser } from '@/types/IUser';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getUser = async (uid: string): Promise<IFetchUser | null> => {
  const q = query(collection(db, 'users'), where('uid', '==', uid));
  const docs = await getDocs(q);

  return docs.docs.length !== 0 ? (docs.docs[0].data() as IFetchUser) : null;
};
