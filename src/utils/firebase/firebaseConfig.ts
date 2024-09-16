import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAqdrZyEpkzTVreep9f4jzB-avqQ7vidqw',
  authDomain: 'graphiql-app-d2505.firebaseapp.com',
  projectId: 'graphiql-app-d2505',
  storageBucket: 'graphiql-app-d2505.appspot.com',
  messagingSenderId: '794876792721',
  appId: '1:794876792721:web:e273588a559623f4125430',
  measurementId: 'G-T7G5N1JNV4',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
