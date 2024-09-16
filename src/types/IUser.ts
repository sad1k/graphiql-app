export interface IUser {
  name: string;
  email: string;
}

export interface ISignUpUser extends IUser {
  password: string;
  confirmPassword: string;
}

export interface ISignInUser {
  email: string;
  password: string;
}

export interface IFetchUser {
  uid: string;
  name: string;
  email: string;
  authProvider: string;
  accessToken: string;
  refreshToken: string;
  expirationTime: number;
}
