import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import style from '../HomeStyle';

const { title } = style;

interface IHomeTitle {
  name: undefined | string;
}

const HomeTitle: FC<IHomeTitle> = ({ name }) => {
  const t = useTranslations('HomePage');

  return (
    <Typography component='h2' variant='h2' sx={title} data-testid='home-title'>
      {name ? t('title_with-auth') : t('title')}
      {name && <span>{name}!</span>}
    </Typography>
  );
};

export default HomeTitle;
