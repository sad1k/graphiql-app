import { Box, List, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import TeamItem from './TeamItem/TeamItem';
import s from './TeamStyle';

const Team = () => {
  const t = useTranslations('HomePage');

  const teamInfo = [
    {
      id: 0,
      firstName: t('first_member-name'),
      lastName: t('first_member-lastName'),
      photo: '/avatar.jpg',
      role: t('first_member-role'),
      git: 'https://github.com/sad1k',
      bio: t('first_member-bio'),
    },
    {
      id: 1,
      firstName: t('second_member-name'),
      lastName: t('second_member-lastName'),
      photo: '/2.webp',
      role: t('second_member-role'),
      git: 'https://github.com/Friday-13',
      bio: t('second_member-bio'),
    },
    {
      id: 2,
      firstName: t('third_member-name'),
      lastName: t('third_member-lastName'),
      photo: '/3.webp',
      role: t('third_member-role'),
      git: 'https://github.com/ab3mn',
      bio: t('third_member-bio'),
    },
  ];

  return (
    <Box component='article'>
      <Typography
        component='h2'
        variant='h2'
        sx={s.title}
        data-testid='team-title'
      >
        {t('member_title')}
      </Typography>
      <List>
        {teamInfo.map((item) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Team;
