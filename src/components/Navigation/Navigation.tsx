'use client';

import {
  Toolbar,
  IconButton,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import navStyle from './NavStyle';
import NavLinks from './NavLinks/NavLinks';

const { toogleButton, hr, iconContainer } = navStyle;

const Navigation = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <Toolbar>
      <ToggleButtonGroup exclusive aria-label='Platform'>
        <ToggleButton sx={toogleButton} value='eng'>
          Eng
        </ToggleButton>
        <ToggleButton sx={toogleButton} value='rus'>
          Rus
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={hr}>|</Box>
      <NavLinks />

      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={() => setIsDrawerOpened(true)}
        sx={iconContainer}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default Navigation;
