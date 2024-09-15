'use client';

import { AppBar } from '@mui/material';
import useScrolling from '@/hooks/useScrolling';
import { headerStyle } from './HeaderStyle';
import HeaderContainer from './HeaderContainer';

const { header } = headerStyle;

export const LogoSize = 80;
export const LogoActiveSize = 60;

export const getLogoSize = (isScrolling = false) =>
  isScrolling ? LogoActiveSize : LogoSize;

const Header = () => {
  const [isScrolling] = useScrolling();

  return (
    <AppBar sx={header}>
      <HeaderContainer isScrolling={isScrolling} />
    </AppBar>
  );
};

export default Header;
