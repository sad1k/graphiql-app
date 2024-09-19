import { Box } from '@mui/material';
import s from './AboutImageStyle';

const AboutImage = () => (
  <Box sx={s.container} data-testid='about-image-container'>
    <Box sx={s.image} />
  </Box>
);

export default AboutImage;
