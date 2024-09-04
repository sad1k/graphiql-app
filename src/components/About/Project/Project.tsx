import { Box, Typography } from '@mui/material';

import s from './ProjectStyle';

const Project = () => (
  <Box sx={s.container} component='article'>
    <Typography component='h2' variant='h2' sx={s.title}>
      About the Project
    </Typography>

    <Box sx={s.info__container}>
      <Typography sx={s.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui
        veniam non aliquid neque accusantium, assumenda illum quod vel a sit
        deserunt nam minima cum harum eius, eveniet nulla. Numquam, maxime
        accusantium culpa at inventore, quidem commodi impedit nostrum hic velit
        consectetur ratione qui maiores dolore rerum perspiciatis minus
        exercitationem? Aspernatur ipsum sequi, maxime ipsa illo molestiae amet
        porro itaque dolor non consequuntur. In porro ad doloremque dicta labore
        corrupti.
      </Typography>{' '}
      <Typography sx={s.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui
        veniam non aliquid neque accusantium, assumenda illum quod vel a sit
        deserunt nam minima cum harum eius, eveniet nulla. Numquam, maxime
        accusantium culpa at inventore, quidem commodi impedit nostrum hic velit
        consectetur ratione qui maiores dolore rerum perspiciatis minus
        exercitationem?
      </Typography>
    </Box>
  </Box>
);

export default Project;
