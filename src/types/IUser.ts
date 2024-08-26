export interface IUser {
  name: string;
  email: string;
}

export interface ISignUpUser extends IUser {
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
