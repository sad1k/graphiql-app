'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  InputLabel,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
import { StyledInput } from '@/components/Input/Input';
import { updateEndpointInUrl } from '@utils/graphql/updateEndpointInUrl';
import { GraphQLSchema } from 'graphql';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import notification from '@utils/notification/notification';
import { FormProvider, useForm } from 'react-hook-form';
import HeadersTable from '@/views/RestClient/HeadersTable';
import { THeaders } from '@/types/headers';
import { updateHeadersInUrl } from '@/utils/graphql/updateHeadersInUrl';
import { DocumentationView } from '../Documentation/Documentation';
import { boxStyles } from './styles';

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
  initSdlUrl?: string;
  initHeaders?: THeaders;
}

export const GraphQlPage = ({
  initEndpointUrl,
  initQuery,
  initSdlUrl,
  initHeaders,
}: IGraphQlPageProps) => {
  const [query, setQuery] = useState<string>(initQuery ?? '');

  const [endpointUrl, setEndpointUrl] = useState<string>(initEndpointUrl ?? '');
  const [sdlUrl, setSdlUrl] = useState<string>(initSdlUrl ?? '');

  const small = useMediaQuery('(max-width: 700px)');

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (initQuery) {
      setVisible(true);
    }
  }, [initQuery]);
  const [variables, setVariables] = useState('');

  const [json, setJSON] = useState({});

  const handleChangeQuery = useCallback((_query: string) => {
    setQuery(_query);
  }, []);

  const handleChangeVariables = useCallback((value: string) => {
    setVariables(value);
  }, []);

  const makeRequest = () => {
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
        notification('error', 'Error fetch query');
      });
  };
  const methods = useForm<{ headers: THeaders }>({ mode: 'onChange' });
  const { getValues } = methods;

  const handleBlur = () => {
    const headersMap = Object.fromEntries(
      getValues('headers').map(({ key, value }) => [key, value]),
    );
    const updatedUrl = updateHeadersInUrl(headersMap);

    window.history.pushState({}, '', updatedUrl); // Обновляем URL
  };

  return (
    <Stack direction='row' flexWrap={small ? 'wrap' : 'nowrap'}>
      <Box sx={boxStyles}>
        <StyledInput
          variant='outlined'
          value={endpointUrl}
          label='Endpoint URL:'
          placeholder='https://example.com/graphql'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEndpointUrl(e.target.value)
          }
          onBlur={() => {
            updateEndpointInUrl(endpointUrl);
            setSdlUrl(`${endpointUrl}?sdl`);
          }}
        />
        <Button onClick={() => makeRequest()}>Send Request</Button>
        <StyledInput
          variant='outlined'
          value={sdlUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSdlUrl(e.target.value)
          }
          label='SDL URL:'
          placeholder='https://example.com/schema'
        />
        <Button onClick={() => setVisible(true)}>Get Graphql Schema</Button>

        {visible ? (
          <>
            <InputLabel>Query:</InputLabel>
            <Editor
              query={initQuery ?? ''}
              setQuery={handleChangeQuery}
              sdlUrl={sdlUrl}
            />
            <Accordion>
              <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <Typography>Variables</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <VariablesEditor setVariables={handleChangeVariables} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <Typography>Headers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormProvider {...methods}>
                  <HeadersTable
                    onBlur={handleBlur}
                    initialHeaders={initHeaders ?? []}
                  />
                </FormProvider>
              </AccordionDetails>
            </Accordion>
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
