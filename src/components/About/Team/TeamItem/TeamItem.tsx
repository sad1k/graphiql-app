import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Box, Typography } from '@mui/material';
import Image from 'next/image';
import s from './TeamItemStyle';

interface ITeamMember {
  id: number;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
  git: string;
  bio: string;
}

const TeamItem = ({ item }: { item: ITeamMember }) => {
  const { firstName, lastName, photo, role, git, bio, id } = item;

  return (
    <Box sx={s.item(id)} component='li'>
      <Box component='article' sx={s.container}>
        <Box sx={s.wrapper(id)}>
          <Box>
            <Box sx={s.img__container}>
              <Image
                alt={firstName}
                src={photo}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
                loading='eager'
                priority
              />
            </Box>
            <Box sx={s.about__cotainer(id)}>
              <Typography sx={{ letterSpacing: 0.5 }}>
                <span>{firstName}</span> {lastName}
              </Typography>
              <Box sx={s.role}>
                <a href={git} target='_blank' rel='noreferrer'>
                  <IconButton sx={s.icon(id)}>
                    <GitHubIcon />
                  </IconButton>
                </a>
                <span>{role}</span>
              </Box>
            </Box>
          </Box>

          <Typography sx={s.bio(id)}>{bio}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamItem;
