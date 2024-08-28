import { IFetchUser } from '@/types/IUser';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

type TGetUser = (uid: string) => Promise<IFetchUser | null>;

export const getUser: TGetUser = async (uid) => {
  const q = query(collection(db, 'users'), where('uid', '==', uid));
  const docs = await getDocs(q);

  return docs.docs.length !== 0 ? (docs.docs[0].data() as IFetchUser) : null;
};
