import { FC } from 'react';
import { GRAPHIQL, HISTORY, REST, SIGN_IN, SIGN_UP } from '@/constants/path';
import { Box } from '@mui/material';
import CustomLink from '@/components/Link/Link';
import { useTranslations } from 'next-intl';
import style from '../HomeStyle';

const { linkContainer } = style;

interface IHomeLinks {
  isAuth: boolean;
}

const HomeLinks: FC<IHomeLinks> = ({ isAuth }) => {
  const t = useTranslations('Links');

  return (
    <Box sx={linkContainer}>
      {!isAuth ? (
        <>
          <CustomLink
            href={SIGN_IN}
            data-testid='signIn-link'
            text={t('signIn')}
          />
          <CustomLink href={SIGN_UP} text={t('signUp')} />
        </>
      ) : (
        <>
          <CustomLink href={REST} text={t('rest')} />
          <CustomLink href={GRAPHIQL} text={t('grapiql')} />
          <CustomLink href={HISTORY} text={t('history')} />
        </>
      )}
    </Box>
  );
};

export default HomeLinks;
