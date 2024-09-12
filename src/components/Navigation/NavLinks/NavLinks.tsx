'use client';

import { FC } from 'react';
import { Box } from '@mui/material';

import { useAppSelector } from '@utils/store/hooks';

import navStyle from '../NavStyle';
import NavLink from './NavLink';

const { container, driverContainer } = navStyle;

interface INavLinks {
  toggleDrawer: (newOpen: boolean) => () => void;
  isDriverBar: boolean;
}

const NavLinks: FC<INavLinks> = ({ toggleDrawer, isDriverBar }) => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <Box
      sx={isDriverBar ? driverContainer : container}
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      {!auth ? (
        <>
          <NavLink path='/login' text='Login' />
          <NavLink path='/signup' text='Sign Up' />
        </>
      ) : (
        <>
          <NavLink path='/' text='Home' />
          <NavLink path='/' text='Log Out' />
        </>
      )}
    </Box>
  );
};

export default NavLinks;
