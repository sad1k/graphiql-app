import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from '@/utils/firebase/signInWithGoogle';
import { IFetchUser } from '@/types/IUser';
import { FC } from 'react';
import { AuthButtonsStyle } from '../AuthButtonsStyle';

const { button, icon } = AuthButtonsStyle;

interface IGoogleLoginButton {
  saveAuthData: (newUser: IFetchUser | string) => void;
}

const GoogleLoginButton: FC<IGoogleLoginButton> = ({ saveAuthData }) => {
  const handleLoginWithGoogle = async () => {
    const newUser = await signInWithGoogle();

    if (newUser) saveAuthData(newUser);
  };

  return (
    <Button
      type='button'
      variant='contained'
      sx={button}
      onClick={handleLoginWithGoogle}
    >
      <GoogleIcon sx={icon} />
      authorization with google
    </Button>
  );
};

export default GoogleLoginButton;
