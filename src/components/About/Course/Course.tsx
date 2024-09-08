import { Box, Typography } from '@mui/material';
import { courseContent } from '@/constants/content';
import Content from '../Content/Content';
import s from './CourseStyle';

const Course = () => (
  <Box sx={s.container} component='article'>
    <Typography component='h2' variant='h2' sx={s.title}>
      About the Course
    </Typography>

    <Content content={courseContent} />
  </Box>
);

export default Course;
