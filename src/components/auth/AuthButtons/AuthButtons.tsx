import { FC } from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { IFetchUser } from '@/types/IUser';

import GoogleLoginButton from './GoogleLoginButton/GoogleLoginButton';
import { AuthButtonsStyle } from './AuthButtonsStyle';

interface IAuthButtons {
  text: string;
  isValid: boolean;
  saveAuthData: (newUser: IFetchUser | string) => void;
}
const { buttonContainer, button, title } = AuthButtonsStyle;

const AuthButtons: FC<IAuthButtons> = ({ text, isValid, saveAuthData }) => (
  <Grid item xs={12} sx={buttonContainer}>
    <Button type='submit' variant='contained' sx={button} disabled={!isValid}>
      {text}
    </Button>
    <Typography variant='body1' component='p' sx={title}>
      OR
    </Typography>
    <GoogleLoginButton saveAuthData={saveAuthData} />
  </Grid>
);

export default AuthButtons;
