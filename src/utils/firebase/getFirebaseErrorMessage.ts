import { FirebaseError } from 'firebase/app';

type TGetFirebaseErrorMessage = (error: unknown) => string;

export const getFirebaseErrorMessage: TGetFirebaseErrorMessage = (error) => {
  let errMessage = 'An unexpected error occurred';

  if (error instanceof FirebaseError) {
    const message = error.code.split('/').pop();

    if (message) errMessage = message;
  }

  return errMessage;
};
