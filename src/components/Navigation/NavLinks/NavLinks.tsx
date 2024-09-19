'use client';

import { FC } from 'react';
import { Box, Button } from '@mui/material';

import { useAppSelector } from '@/utils/store/hooks';
import { HOME, SIGN_IN, SIGN_UP } from '@/constants/path';
import useAuthData from '@/hooks/useAuthData';

import CustomLink from '@/components/Link/Link';
import { useTranslations } from 'next-intl';
import navStyle from '../NavStyle';
import LanguageButtons from '../LanguageButtons/LanguageButtons';

const { container, driverContainer, hr, linkContainer, signOutButton } =
  navStyle;

interface INavLinks {
  toggleDrawer: (newOpen: boolean) => () => void;
  isDriverBar: boolean;
}

const NavLinks: FC<INavLinks> = ({ toggleDrawer, isDriverBar }) => {
  const authState = useAppSelector((state) => state.auth.authState);
  const { removeAuthData } = useAuthData();

  const t = useTranslations('Links');

  const languages = [
    { text: t('en'), href: 'en' },
    { text: t('rus'), href: 'rus' },
  ];

  return (
    <Box
      sx={isDriverBar ? driverContainer : container}
      data-testid='nav-links'
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      <LanguageButtons languages={languages} />
      <Box sx={hr}>|</Box>
      {!authState ? (
        <>
          <CustomLink href={SIGN_IN} text={t('signIn')} type='nav' />
          <CustomLink href={SIGN_UP} text={t('signUp')} type='nav' />
        </>
      ) : (
        <Box sx={linkContainer} data-testid='driver-bar-container'>
          <CustomLink href={HOME} text={t('home')} type='nav' />
          <Button
            type='button'
            onClick={removeAuthData}
            sx={signOutButton}
            data-testid='sign-out-button'
          >
            {t('signOut')}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NavLinks;
