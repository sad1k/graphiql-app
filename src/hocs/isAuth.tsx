'use client';

import { ComponentType, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAppSelector } from '@/utils/store/hooks';

const isAuth =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    const { authState } = useAppSelector((state) => state.auth);

    // useLayoutEffect((): void => {
    //   if (authState) redirect('/');
    // }, []);

    // return !authState ? <Component {...props} /> : null;

    return <Component {...props} />;
  };

export default isAuth;
