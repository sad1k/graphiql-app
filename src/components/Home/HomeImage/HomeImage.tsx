import { Box } from '@mui/material';
import Image from 'next/image';

const HomeImage = () => (
  <Box sx={{ maxWidth: '50rem', m: 'auto' }}>
    <Image
      src='/main.png'
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '100%', height: 'auto' }}
      alt='grapql&rest'
      loading='eager'
      priority
    />
  </Box>
);

export default HomeImage;
