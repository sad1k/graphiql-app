import { ReactNode } from 'react';
import { AppBar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { headerStyle } from './HeaderStyle';

const { container, header } = headerStyle;

const Header = ({ children }: { children: ReactNode }) => (
  <AppBar position='sticky' sx={header}>
    <Box sx={container}>
      <Link href='/'>
        <Image src='/logo.png' width={80} height={80} alt='Logo' />
      </Link>
      <Box>{children}</Box>
    </Box>
  </AppBar>
);

export default Header;
