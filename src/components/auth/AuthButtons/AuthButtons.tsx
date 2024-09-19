import { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';

import GoogleLoginButton from './GoogleLoginButton/GoogleLoginButton';
import { AuthButtonsStyle } from './AuthButtonsStyle';

interface IAuthButtons {
  text: string;
  isValid: boolean;
  or: string;
}
const { buttonContainer, button, title } = AuthButtonsStyle;

const AuthButtons: FC<IAuthButtons> = ({ text, isValid, or }) => (
  <Box sx={buttonContainer}>
    <Button type='submit' variant='contained' sx={button} disabled={!isValid}>
      {text}
    </Button>
    <Typography variant='body1' component='p' sx={title}>
      {or}
    </Typography>
    <GoogleLoginButton />
  </Box>
);

export default AuthButtons;
