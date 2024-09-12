import { Box } from '@mui/material';
import { FC } from 'react';
import { v4 } from 'uuid';
import CustomLink from '@/components/Link/Link';

interface IProps {
  languages: Readonly<Array<{ lng: string; href: string }>>;
}

const LanguageButtons: FC<IProps> = ({ languages }) => (
  <Box sx={{ display: 'flex', columnGap: 2 }} component='ul'>
    {languages.map(({ lng, href }) => (
      <li key={v4()}>
        <CustomLink href={href} text={lng} />
      </li>
    ))}
  </Box>
);

export default LanguageButtons;
