'use client';

import { createGraphiQLFetcher, Fetcher } from '@graphiql/toolkit';
import { createContext, PropsWithChildren, useMemo } from 'react';

export const FetchContext = createContext({ fetcher: {} as Fetcher });

export const FetchProvider = ({ children }: PropsWithChildren) => {
  const fetcher = useMemo(
    () =>
      createGraphiQLFetcher({
        url: 'https://graphql-pokemon2.vercel.app/',
      }),
    [],
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FetchContext.Provider value={{ fetcher }}>
      {children}
    </FetchContext.Provider>
  );
};
