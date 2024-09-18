import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import CustomLink from '@/components/Link/Link';

import { FormContainerStyle } from './FormContainerStyle';

const { title, container, titleContainer } = FormContainerStyle;

interface IFormContainer {
  text: string;
  children: ReactNode;
  href: string;
  linkText: string;
}

const FormContainer: FC<IFormContainer> = ({
  text,
  children,
  href,
  linkText,
}) => (
  <Box sx={container} component='article'>
    <Box sx={titleContainer}>
      <Typography variant='h3' component='h2' sx={title}>
        {text}
      </Typography>
      <CustomLink href={href} text={linkText} type='auth' />
    </Box>

    {children}
  </Box>
);

export default FormContainer;
