'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@utils/store/store';
import { persistStore } from 'redux-persist';

persistStore(store);

const StoreProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
