import { ReactNode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import { rootReducer } from '../store/store';
import { IAuthState } from '../store/slices/userSlice';

type TAuth = (IAuthState & PersistPartial) | undefined;

const preloadedState: Partial<{ auth: TAuth } | undefined> = {
  auth: {
    authState: null,
    _persist: {
      version: 1,
      rehydrated: true,
    },
  },
};

function render(
  ui: ReactNode,
  {
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
