import { FC } from 'react';
import { Typography } from '@mui/material';
import style from '../HomeStyle';

const { title } = style;

interface IHomeTitle {
  name: undefined | string;
}

const HomeTitle: FC<IHomeTitle> = ({ name }) => (
  <Typography component='h2' variant='h2' sx={title}>
    {name ? `Welcome Back, ` : 'Welcome!'}
    {name && <span>{name}!</span>}
  </Typography>
);

export default HomeTitle;
