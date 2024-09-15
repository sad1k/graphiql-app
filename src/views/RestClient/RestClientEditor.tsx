import { Box, Paper } from '@mui/material';
import { IRestClientForm } from '@/types/rest-client-form';
import RestClientForm from './RestClientForm';

const RestClientEditor = ({
  method,
  url,
  headers,
  setResponse,
  setStatus,
}: IRestClientForm) => (
  <Box component='section' sx={{ width: 1, paddingX: 10 }}>
    <Paper sx={{ padding: 3, mx: 0.5 }}>
      <RestClientForm
        method={method}
        url={url}
        headers={headers}
        body=''
        setStatus={setStatus}
        setResponse={setResponse}
      />
    </Paper>
  </Box>
);

export default RestClientEditor;
