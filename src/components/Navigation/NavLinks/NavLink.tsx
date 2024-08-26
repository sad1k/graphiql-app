'use client';

import Link from 'next/link';
import { FC, ReactNode, useState } from 'react';

export interface INavLink {
  path: string;
  text: string;
}

const NavLink: FC<INavLink> = ({ path, text }): ReactNode => {
  const [isHover, setHover] = useState(false);
  const toggleHover = () => setHover(!isHover);
  let linkStyle;

  isHover ? (linkStyle = { color: 'red' }) : (linkStyle = { color: 'white' });

  return (
    <Link
      href={path}
      style={linkStyle}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {text}
    </Link>
  );
};

export default NavLink;
