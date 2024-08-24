'use client';

import { useState } from 'react';

import { Box } from '@mui/material';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { IUser } from '@/types/user';

import navStyle from '../NavStyle';

const { container } = navStyle;

const NavLinks = () => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <Box sx={container}>
      {!user ? (
        <>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Sign Up</Link>
        </>
      ) : (
        <Link href='/'>Log Out</Link>
      )}
    </Box>
  );
};

export default NavLinks;
