import { FC } from 'react';
import { Typography } from '@mui/material';
import style from '../HomeStyle';

const { title, spanTitle } = style;

interface IHomeTitle {
  name: undefined | string;
}

const HomeTitle: FC<IHomeTitle> = ({ name }) => (
  <Typography component='h2' variant='h2' sx={title}>
    {name ? `Welcome Back, ` : 'Welcome!'}
    {name && <span style={spanTitle}>{name}!</span>}
  </Typography>
);

export default HomeTitle;
