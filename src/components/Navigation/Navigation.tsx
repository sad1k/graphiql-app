'use client';

import { Toolbar, IconButton, Drawer } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import NavLinks from './NavLinks/NavLinks';
import navStyle from './NavStyle';

const { burger, drawer } = navStyle;

const Navigation = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpened(newOpen);
  };

  return (
    <Toolbar>
      <NavLinks toggleDrawer={toggleDrawer} isDriverBar={false} />

      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={() => setIsDrawerOpened(true)}
        sx={burger}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor='right'
        open={isDrawerOpened}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: drawer }}
      >
        <NavLinks toggleDrawer={toggleDrawer} isDriverBar />
      </Drawer>
    </Toolbar>
  );
};

export default Navigation;
