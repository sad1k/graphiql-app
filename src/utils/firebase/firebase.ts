import { initializeApp, FirebaseError } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const getFirebaseErrorMessage = (error: unknown) =>
  error instanceof FirebaseError
    ? error.message
    : 'An unexpected error occurred';

export const signInWithGoogle = async (): Promise<string | void> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;

    const q = query(collection(db, ' users '), where('uid', '==', user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: ' google ',
        email: user.email,
      });
    }

    return '';
  } catch (error: unknown) {
    return getFirebaseErrorMessage(error);
  }
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<string | void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
): Promise<string | void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;

    await addDoc(collection(db, ' users'), {
      uid: user.uid,
      name,
      authProvider: ' local',
      email,
    });

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};

export const sendPasswordReset = async (
  email: string,
): Promise<string | void> => {
  try {
    await sendPasswordResetEmail(auth, email);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};

export const logout = async (): Promise<string | void> => {
  try {
    await signOut(auth);

    return '';
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
