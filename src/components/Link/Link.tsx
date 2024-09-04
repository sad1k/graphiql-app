import { PINK_COLOR, LIGHT_PINK_COLOR, WHITE_COLOR } from '@/constants/colors';
import { Link } from '@mui/material';
import { FC } from 'react';

interface ILink {
  href: string;
  text: string;
  type?: string;
}

const style = (type?: string) => ({
  textTransform: 'capitalize',
  color: PINK_COLOR,
  fontWeight: '600',
  '&:hover': {
    color: type === 'nav' ? WHITE_COLOR : LIGHT_PINK_COLOR,
  },
});

const CustomLink: FC<ILink> = ({ href, text, type }) => (
  <Link href={href} underline='hover' sx={style(type)}>
    {text}
  </Link>
);

export default CustomLink;
