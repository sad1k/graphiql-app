'use client';

import { useContext } from 'react';
import {
  EditorContextProvider,
  ExecutionContextProvider,
  ResponseEditor,
  SchemaContextProvider,
  useExecutionContext,
} from '@graphiql/react';
import { Button } from '@mui/material';
import { FetchContext, FetchProvider } from '../FetchProvider/FetchProvider';

const ResponseViewWithFetch = () => {
  const ctx = useExecutionContext();

  return (
    <>
      <ResponseEditor />
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100,
        }}
        variant='contained'
        onClick={() => {
          if (ctx) {
            ctx?.run();
          }
        }}
      >
        Send
      </Button>
    </>
  );
};

const ExecutionView = () => {
  const fetch = useContext(FetchContext);

  return (
    <EditorContextProvider>
      <SchemaContextProvider fetcher={fetch.fetcher}>
        <ExecutionContextProvider fetcher={fetch.fetcher}>
          <ResponseViewWithFetch />
        </ExecutionContextProvider>
      </SchemaContextProvider>
    </EditorContextProvider>
  );
};

export const ResponseView = () => (
  <FetchProvider>
    <ExecutionView />
  </FetchProvider>
);
