import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

import { FormContainerStyle } from './FormContainerStyle';

const { title, container } = FormContainerStyle;

interface IFormContainer {
  text: string;
  children: ReactNode;
}

const FormContainer: FC<IFormContainer> = ({ text, children }) => (
  <Box sx={container} component='article'>
    <Typography variant='h3' component='h2' sx={title}>
      {text}
    </Typography>
    {children}
  </Box>
);

export default FormContainer;
