import { AppBar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { headerStyle } from './HeaderStyle';
import Navigation from '../Navigation/Navigation';

const { container, header } = headerStyle;

const Header = () => (
  <AppBar position='sticky' sx={header}>
    <Box sx={container}>
      <Link href='/'>
        <Image src='/logo.png' width={80} height={80} alt='Logo' />
      </Link>
      <Box>
        <Navigation />
      </Box>
    </Box>
  </AppBar>
);

export default Header;
