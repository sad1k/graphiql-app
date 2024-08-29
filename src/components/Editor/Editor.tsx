'use client';

import { GraphiQLProvider, QueryEditor } from '@graphiql/react';
import { useContext } from 'react';
import { FetchContext, FetchProvider } from '../FetchProvider/FetchProvider';

const EditorWithFetch = () => {
  const fetch = useContext(FetchContext);

  return (
    <div>
      <GraphiQLProvider fetcher={fetch.fetcher}>
        <div className='graphiql-container' style={{ height: '500px' }}>
          <QueryEditor />
        </div>
      </GraphiQLProvider>
    </div>
  );
};

export const Editor = () => (
  <FetchProvider>
    <EditorWithFetch />
  </FetchProvider>
);
