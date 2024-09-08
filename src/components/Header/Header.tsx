'use client';

import { AppBar, Box } from '@mui/material';
import useScrolling from '@/hooks/useScrolling';
import Link from 'next/link';
import Image from 'next/image';
import { headerStyle } from './HeaderStyle';
import Navigation from '../Navigation/Navigation';

const { container, header, active } = headerStyle;

const LogoSize = 80;
const LogoActiveSize = 60;

const getLogoSize = (isScrolling = false) =>
  isScrolling ? LogoActiveSize : LogoSize;

const Header = () => {
  const [isScrolling] = useScrolling();

  return (
    <AppBar sx={header}>
      <Box sx={isScrolling ? { ...container, ...active } : container}>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={getLogoSize(isScrolling)}
            height={getLogoSize(isScrolling)}
            alt='Logo'
          />
        </Link>
        <Box>
          <Navigation />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
