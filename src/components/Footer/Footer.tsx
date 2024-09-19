import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import s from './FooterStyle';

const Footer = () => (
  <footer>
    <Box sx={s.hr} />
    <Box style={s.container}>
      <a
        href='https://github.com/sad1k/graphiql-app'
        target='_blank'
        rel='noreferrer'
      >
        <Image src='/git_logo.svg' width={80} height={40} alt='git' priority />
      </a>
      <Typography variant='h6' component='h6'>
        2024
      </Typography>
      <a href='https://rs.school/' target='_blank' rel='noreferrer'>
        <Image
          src='/rs_school.svg'
          width={80}
          height={64}
          alt='RS School'
          priority
        />
      </a>
    </Box>
  </footer>
);

export default Footer;
