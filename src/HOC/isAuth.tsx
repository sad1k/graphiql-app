'use client';

import { ElementType, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAppSelector } from '@/utils/store/hooks';

const isAuth = (Component: ElementType) => (props: object) => {
  const { authState } = useAppSelector((state) => state.auth);

  useLayoutEffect((): void => {
    if (authState) redirect('/');
  }, []);

  return !authState ? <Component {...props} /> : null;

  return <Component {...props} />;
};

export default isAuth;
