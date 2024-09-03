'use client';

import { FC } from 'react';
import { Box, Button } from '@mui/material';

import { useAppSelector } from '@/utils/store/hooks';
import { HOME, SIGN_IN, SIGN_UP } from '@/constants/path';
import useAuthData from '@/hooks/useAuthData';

import navStyle from '../NavStyle';
import CustomLink from '@/components/Link/Link';

const { container, driverContainer, signOut } = navStyle;

interface INavLinks {
  toggleDrawer: (newOpen: boolean) => () => void;
  isDriverBar: boolean;
}

const NavLinks: FC<INavLinks> = ({ toggleDrawer, isDriverBar }) => {
  const { authState } = useAppSelector((state) => state.auth);
  const { removeAuthData } = useAuthData();

  return (
    <Box
      sx={isDriverBar ? driverContainer : container}
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      {!authState ? (
        <>
          <CustomLink href={SIGN_IN} text='Sign In' />
          <CustomLink href={SIGN_UP} text='Sign Up' />
        </>
      ) : (
        <>
          <CustomLink href={HOME} text='Home' />
          <Button type='button' onClick={removeAuthData} sx={signOut}>
            Sign Out
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavLinks;
