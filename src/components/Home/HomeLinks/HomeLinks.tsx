import { FC } from 'react';
import { GRAPHIQL, HISTORY, REST, SIGN_IN, SIGN_UP } from '@/constants/path';
import { Box } from '@mui/material';

import CustomLink from '@/components/Link/Link';
import style from '../HomeStyle';

const { linkContainer } = style;

interface IHomeLinks {
  isAuth: boolean;
}

const HomeLinks: FC<IHomeLinks> = ({ isAuth }) => (
  <Box sx={linkContainer}>
    {!isAuth ? (
      <>
        <CustomLink href={SIGN_IN} text='sign in' />
        <CustomLink href={SIGN_UP} text='sign up' />
      </>
    ) : (
      <>
        <CustomLink href={REST} text='REST Client' />
        <CustomLink href={GRAPHIQL} text='GraphiQL Client' />
        <CustomLink href={HISTORY} text='history' />
      </>
    )}
  </Box>
);

export default HomeLinks;
