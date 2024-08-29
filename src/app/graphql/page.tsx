'use client';

import '@graphiql/react/dist/style.css';

import { Box, InputLabel, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import { StyledInput } from '../../components/Input/Input';

const Editor = dynamic(
  () => import('../../components/Editor/Editor').then((mod) => mod.Editor),
  {
    ssr: false,
  },
);

const ResponseView = dynamic(
  () =>
    import('../../components/ResponseView/ResponseView').then(
      (mod) => mod.ResponseView,
    ),
  {
    ssr: false,
  },
);

const Page = () => (
  <Stack direction='row'>
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
      <StyledInput
        label='Endpoint URL:'
        placeholder='https://example.com/graphql'
      />
      <StyledInput label='SDL URL:' placeholder='https://example.com/schema' />
      <InputLabel>Query:</InputLabel>
      <Editor />
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
      <ResponseView />
    </Box>
  </Stack>
);

export default Page;
