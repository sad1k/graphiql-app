import { ReactNode } from 'react';
import { AppBar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ children }: { children: ReactNode }) => (
  <AppBar position='sticky' sx={{ '& .MuiToolbar-root': { padding: 0 } }}>
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 1,
      }}
    >
      <Link href='/'>
        <Image src='/logo.png' width={80} height={80} alt='Logo' />
      </Link>
      <Box>{children}</Box>
    </Box>
  </AppBar>
);

export default Header;
