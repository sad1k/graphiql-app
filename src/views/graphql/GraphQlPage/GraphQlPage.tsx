/* eslint-disable no-console */

'use client';

import { Box, Button, InputLabel, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { StyledInput } from '@components/Input/Input';
import { updateEndpointInUrl } from '@utils/graphql/updateEndpointInUrl';
import { GraphQLSchema } from 'graphql';
import { boxStyles } from './styles';
import { DocumentationView } from '../Documentation/Documentation';

const Editor = dynamic(
  () =>
    import('@views/graphql/GraphQlEditor/GraphQlEditor').then(
      (mod) => mod.GraphQlEditor,
    ),
  {
    ssr: false,
  },
);

const VariablesEditor = dynamic(() =>
  import('@views/graphql/VariablesEditor/VariablesEditor').then(
    (mod) => mod.VariablesEditor,
  ),
);

const ResponseView = dynamic(
  () =>
    import('@views/graphql/ResponseView/ResponseView').then(
      (mod) => mod.ResponseView,
    ),
  {
    ssr: false,
  },
);

interface IGraphQlPageProps {
  initEndpointUrl?: string;
  initQuery?: string;
}

export const GraphQlPage = ({
  initEndpointUrl,
  initQuery,
}: IGraphQlPageProps) => {
  const [query, setQuery] = useState<string>(initQuery ?? '');

  const [endpointUrl, setEndpointUrl] = useState<string>(initEndpointUrl ?? '');
  const [sdlUrl, setSdlUrl] = useState<string>('');

  const [visible, setVisible] = useState(false);

  const [variables, setVariables] = useState('');

  const [json, setJSON] = useState({});

  const handleChangeQuery = useCallback((_query: string) => {
    setQuery(_query);
  }, []);

  const handleChangeVariables = useCallback((value: string) => {
    setVariables(value);
  }, []);

  const makeRequest = () => {
    // eslint-disable-next-line no-void
    fetch(sdlUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    })
      .then((res) => res.json())
      .then((result: { data: GraphQLSchema }) => {
        setJSON(result.data);
      })
      .catch(() => {
        console.error('Error fetch query');
      });
  };

  return (
    <Stack direction='row'>
      <Box sx={boxStyles}>
        <StyledInput
          variant='outlined'
          value={endpointUrl}
          label='Endpoint URL:'
          placeholder='https://example.com/graphql'
          onChange={(e) => setEndpointUrl(e.target.value)}
          onBlur={() => {
            updateEndpointInUrl(endpointUrl);
            setSdlUrl(`${endpointUrl}?sdl`);
          }}
        />
        <Button onClick={() => makeRequest()}>Send Request</Button>
        <StyledInput
          variant='outlined'
          value={sdlUrl}
          onChange={(e) => setSdlUrl(e.target.value)}
          label='SDL URL:'
          placeholder='https://example.com/schema'
        />
        <Button onClick={() => setVisible(true)}>Get Graphql Schema</Button>

        {visible ? (
          <>
            <InputLabel>Query:</InputLabel>
            <Editor setQuery={handleChangeQuery} sdlUrl={sdlUrl} />
            <InputLabel>Variables:</InputLabel>
            <VariablesEditor setVariables={handleChangeVariables} />
            <DocumentationView url={sdlUrl} />
          </>
        ) : (
          ''
        )}
      </Box>
      <Box
        sx={{
          padding: '20px 0px',
          label: { color: 'gray', paddingBottom: '10px' },
          backgroundColor: '#24248f',
          borderRadius: '15px',
          margin: '10px',
          width: '100%',
        }}
      >
        <InputLabel>Response:</InputLabel>
        <ResponseView json={json} />
      </Box>
    </Stack>
  );
};
