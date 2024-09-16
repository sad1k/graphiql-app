import { Box, Typography } from '@mui/material';
import { projectContent } from '@/constants/content';

import s from './ProjectStyle';
import Content from '../Content/Content';

const Project = () => (
  <Box sx={s.container} component='article'>
    <Typography component='h2' variant='h2' sx={s.title}>
      About the Project
    </Typography>

    <Content content={projectContent} />
  </Box>
);

export default Project;
