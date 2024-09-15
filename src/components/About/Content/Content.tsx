import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import s from './ContentStyle';

interface IProps {
  content: Array<{ key: string; text: string }>;
}

const Content: FC<IProps> = ({ content }) => (
  <Box sx={s.container}>
    {content.map(({ key, text }) => (
      <Typography key={key} sx={s.text}>
        {text}
      </Typography>
    ))}
  </Box>
);

export default Content;
