import { THeaders } from '@customTypes/headers';
import { Button, Grid, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { TMethod } from '@utils/restclient/method-type';
import MethodSelect from './MethodSelect';
import UrlInput from '../UrlInput';
import HeadersTable from '../HeadersTable';

interface IRestClientEditor {
  method: TMethod;
  url: string;
  headers: THeaders;
}

const RestClientEditor = ({ method, url, headers }: IRestClientEditor) => (
  <section>
    <Paper sx={{ padding: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h3>RestClient Editor</h3>
        </Grid>

        <Grid item xs={2}>
          <MethodSelect initialValue={method} />
        </Grid>

        <Grid item xs={8}>
          <UrlInput initialUrl={url} />
        </Grid>

        <Grid item xs={2}>
          <Button
            variant='contained'
            sx={{ height: 0.95, width: 1 }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>

        <Grid item xs={12}>
          <h4>Headers: </h4>
        </Grid>

        <Grid item xs={12}>
          <HeadersTable initialHeaders={headers} />
          {/* TODO: add add-headers button */}
        </Grid>

        <Grid item xs={12}>
          <h4>Body </h4>
          {/* TODO: add JSON/Text Editor (the same component in response) */}
        </Grid>
      </Grid>
    </Paper>
  </section>
);

export default RestClientEditor;
