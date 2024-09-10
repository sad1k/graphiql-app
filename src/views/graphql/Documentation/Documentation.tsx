/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import {
  DocExplorer,
  EditorContextProvider,
  ExplorerContextProvider,
  SchemaContextProvider,
} from '@graphiql/react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import '@graphiql/react/dist/style.css';
import './CustomColorsDocs.css';
import { useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  url: string;
}

export const DocumentationView = ({ url }: Props) => {
  const fetcher = createGraphiQLFetcher({
    url,
  });

  const [open, setOpen] = useState(false);

  return (
    <>
      <Typography
        display='inline'
        variant='h6'
      >{`${open ? 'Закрыть' : 'Открыть'} документацию:`}</Typography>
      <IconButton onClick={() => setOpen((toggle) => !toggle)}>
        {open ? <CloseIcon /> : <ArticleIcon />}
      </IconButton>
      <div className={`docsColor ${open ? 'visible' : ''}`}>
        <EditorContextProvider>
          <SchemaContextProvider fetcher={fetcher}>
            <ExplorerContextProvider>
              <DocExplorer />
            </ExplorerContextProvider>
          </SchemaContextProvider>
        </EditorContextProvider>
      </div>
    </>
  );
};
