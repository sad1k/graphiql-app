'use client';

import { FC } from 'react';
import { Box, Button } from '@mui/material';

import { useAppSelector } from '@/utils/store/hooks';
import { ABOUT, HOME, SIGN_IN, SIGN_UP } from '@/constants/path';
import useAuthData from '@/hooks/useAuthData';

import CustomLink from '@/components/Link/Link';
import { languages } from '@/constants/languages';
import navStyle from '../NavStyle';
import LanguageButtons from '../LanguageButtons/LanguageButtons';

const { container, driverContainer, hr, linkContainer, signOutButton } =
  navStyle;

interface INavLinks {
  toggleDrawer: (newOpen: boolean) => () => void;
  isDriverBar: boolean;
}

const NavLinks: FC<INavLinks> = ({ toggleDrawer, isDriverBar }) => {
  const authState = useAppSelector((state) => state.auth.authState);
  const { removeAuthData } = useAuthData();

  return (
    <Box
      sx={isDriverBar ? driverContainer : container}
      data-testid='open-driverBar-button'
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      <LanguageButtons languages={languages} />
      <Box sx={hr}>|</Box>
      {!authState ? (
        <>
          <CustomLink href={SIGN_IN} text='Sign In' type='nav' />
          <CustomLink href={SIGN_UP} text='Sign Up' type='nav' />
        </>
      ) : (
        <Box sx={linkContainer} data-testid='driver-bar-container'>
          <CustomLink href={HOME} text='Home' type='nav' />
          <CustomLink href={ABOUT} text='about us' type='nav' />
          <Button
            type='button'
            onClick={removeAuthData}
            sx={signOutButton}
            data-testid='sign-out-button'
          >
            Sign Out
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NavLinks;
