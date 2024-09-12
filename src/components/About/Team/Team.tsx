import { Box, List, Typography } from '@mui/material';
import { teamInfo } from '@/constants/content';
import TeamItem from './TeamItem/TeamItem';
import s from './TeamStyle';

const Team = () => (
  <Box component='article'>
    <Typography component='h2' variant='h2' sx={s.title}>
      Our Team
    </Typography>
    <List>
      {teamInfo.map((item) => (
        <TeamItem key={item.id} item={item} />
      ))}
    </List>
  </Box>
);

export default Team;
