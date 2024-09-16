'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { headerStyle } from './HeaderStyle';
import Navigation from '../Navigation/Navigation';

const { container, active } = headerStyle;

export const LogoSize = 80;
export const LogoActiveSize = 60;

export const getLogoSize = (isScrolling = false) =>
  isScrolling ? LogoActiveSize : LogoSize;

const HeaderContainer = ({ isScrolling }: { isScrolling: boolean }) => (
  <Box sx={isScrolling ? { ...container, ...active } : container}>
    <Link href='/'>
      <Image
        src='/logo.png'
        width={getLogoSize(isScrolling)}
        height={getLogoSize(isScrolling)}
        alt='Logo'
        priority
      />
    </Link>
    <Box>
      <Navigation />
    </Box>
  </Box>
);

export default HeaderContainer;
