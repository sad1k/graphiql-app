import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from '@utils/firebase/signInWithGoogle';
import useSaveAuthData from '@/hooks/useAuthData';
import { useTranslations } from 'next-intl';
import { AuthButtonsStyle } from '../AuthButtonsStyle';

const { button, icon } = AuthButtonsStyle;

const GoogleLoginButton = () => {
  const { saveAuthData } = useSaveAuthData();

  const t = useTranslations('Auth');

  const handleLoginWithGoogle = async (): Promise<void> => {
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
      {t('google')}
    </Button>
  );
};

export default GoogleLoginButton;
