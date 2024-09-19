import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Content from '../Content/Content';
import s from './CourseStyle';

const Course = () => {
  const t = useTranslations('HomePage');

  const content = [
    { key: '1', text: t('course_one') },
    { key: '2', text: t('course_two') },
  ];

  return (
    <Box sx={s.container} component='article'>
      <Typography
        component='h2'
        variant='h2'
        sx={s.title}
        data-testid='course-title'
      >
        {t('course_title')}
      </Typography>
      <Content content={content} />
    </Box>
  );
};

export default Course;
