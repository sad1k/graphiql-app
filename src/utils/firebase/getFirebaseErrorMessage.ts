import { FirebaseError } from 'firebase/app';

export const getFirebaseErrorMessage = (error: unknown) =>
  error instanceof FirebaseError
    ? error.message
    : 'An unexpected error occurred';
