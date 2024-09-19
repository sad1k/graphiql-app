'use client';

import { Box, Button } from '@mui/material';
import { FC, useTransition } from 'react';
import { v4 } from 'uuid';
import { usePathname, useRouter } from 'next/navigation';
import { PINK_COLOR, WHITE_COLOR } from '@/constants/colors';

interface IProps {
  languages: Readonly<Array<{ text: string; href: string }>>;
}

const style = {
  textTransform: 'capitalize',
  color: PINK_COLOR,
  fontWeight: '600',
  '&:hover': {
    color: WHITE_COLOR,
  },
};

const LanguageButtons: FC<IProps> = ({ languages }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const pathname = usePathname();

  const handleChangeLanguage = (e: React.MouseEvent<HTMLElement>) => {
    const nextLocale = e.currentTarget.getAttribute('data-lng');

    startTransition(() => {
      const path = pathname.split('/');

      path.splice(1, 1);

      const newPathname = `/${nextLocale}${path.join('/')}`;

      router.replace(newPathname);
    });
  };

  return (
    <Box sx={{ display: 'flex', columnGap: 2 }} component='ul'>
      {languages.map(({ text, href }) => (
        <li key={v4()}>
          <Button
            sx={style}
            type='button'
            data-lng={href}
            onClick={handleChangeLanguage}
          >
            {text}
          </Button>
        </li>
      ))}
    </Box>
  );
};

export default LanguageButtons;
