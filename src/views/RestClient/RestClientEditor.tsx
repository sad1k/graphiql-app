import { Paper } from '@mui/material';
import { IRestClientForm } from '@/types/rest-client-form';
import RestClientForm from './RestClientForm';

const RestClientEditor = ({ method, url, headers }: IRestClientForm) => (
  <section>
    <Paper sx={{ padding: 3 }}>
      <RestClientForm method={method} url={url} headers={headers} />
    </Paper>
  </section>
);

export default RestClientEditor;
