import { Box, Paper } from '@mui/material';
import { IRestClientForm } from '@/types/rest-client-form';
import RestClientForm from './RestClientForm';

const RestClientEditor = ({ method, url, headers }: IRestClientForm) => (
  <Box component='section' sx={{ width: 1, paddingX: 10 }}>
    <Paper sx={{ padding: 3, mx: 0.5 }}>
      <RestClientForm method={method} url={url} headers={headers} />
    </Paper>
  </Box>
);

export default RestClientEditor;
