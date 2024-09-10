import { Box } from '@mui/material';
import { FC } from 'react';
import { v4 } from 'uuid';
import CustomLink from '@/components/Link/Link';

interface IProps {
  languages: Readonly<Array<{ lng: string; href: string }>>;
}

const LanguageButtons: FC<IProps> = ({ languages }) => (
  <Box sx={{ display: 'flex', columnGap: 2 }}>
    {languages.map(({ lng, href }) => (
      <CustomLink href={href} text={lng} key={v4()} />
    ))}
  </Box>
);

export default LanguageButtons;
