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
import { memo, useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  url: string;
}

export const DocumentationView = memo(({ url }: Props) => {
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
      <IconButton
        role='IconButton'
        onClick={() => setOpen((toggle: boolean) => !toggle)}
      >
        {open ? <CloseIcon /> : <ArticleIcon />}
      </IconButton>
      <div className={`docsColor ${open ? 'visible' : ''}`}>
        <EditorContextProvider>
          <SchemaContextProvider fetcher={fetcher}>
            <ExplorerContextProvider>
              <div style={{ display: 'contents' }} role='document'>
                <DocExplorer />
              </div>
            </ExplorerContextProvider>
          </SchemaContextProvider>
        </EditorContextProvider>
      </div>
    </>
  );
});
