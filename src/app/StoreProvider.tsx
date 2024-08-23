'use client';

import { useRef } from 'react';

import { Provider } from 'react-redux';

import { AppStore, makeStore } from '@utils/store/store';

const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
