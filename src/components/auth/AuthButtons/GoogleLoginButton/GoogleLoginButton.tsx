import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import { signInWithGoogle } from '@utils/firebase/signInWithGoogle';

import useSaveAuthData from '@/hooks/useAuthData';

import { AuthButtonsStyle } from '../AuthButtonsStyle';

const { button, icon } = AuthButtonsStyle;

const GoogleLoginButton = () => {
  const { saveAuthData } = useSaveAuthData();

  const handleLoginWithGoogle = async (): Promise<void> => {
    const newUser = await signInWithGoogle();

    if (newUser) saveAuthData(newUser);
  };

  return (
    <Button
      type='button'
      variant='contained'
      sx={button}
      onClick={() => {
        void handleLoginWithGoogle();
      }}
    >
      <GoogleIcon sx={icon} />
      authorization with google
    </Button>
  );
};

export default GoogleLoginButton;
