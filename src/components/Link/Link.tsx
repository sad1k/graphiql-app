import { PINK_COLOR, YELLOW_COLOR } from '@/constants/colors';
import { Link } from '@mui/material';
import { FC } from 'react';

interface ILink {
  href: string;
  text: string;
}

const style = {
  textTransform: 'capitalize',
  color: YELLOW_COLOR,
  fontWeight: '600',
  '&:hover': {
    color: PINK_COLOR,
  },
};

const CustomLink: FC<ILink> = ({ href, text }) => (
  <Link href={href} underline='hover' sx={style}>
    {text}
  </Link>
);

export default CustomLink;
