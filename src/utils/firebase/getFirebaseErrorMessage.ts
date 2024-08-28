import { FirebaseError } from 'firebase/app';

type TGetFirebaseErrorMessage = (error: unknown) => string;

export const getFirebaseErrorMessage: TGetFirebaseErrorMessage = (error) =>
  error instanceof FirebaseError
    ? error.message
    : 'An unexpected error occurred';
