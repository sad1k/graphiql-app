import { THeaders } from '@customTypes/headers';
import { Grid, Paper } from '@mui/material';
import { TMethod } from '@utils/restclient/method-type';
import { v4 as uuidv4 } from 'uuid';
import MethodSelect from './MethodSelect';

interface IRestClientEditor {
  method: TMethod;
  url: string;
  headers: THeaders;
}

const RestClientEditor = ({ method, url, headers }: IRestClientEditor) => (
  <section>
    <Paper sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>RestClient Editor</h3>
        </Grid>

        <Grid item xs={2}>
          <MethodSelect initialValue={method} />
        </Grid>

        <Grid item xs={10}>
          {/* TODO: add url input */}
          <span>{url}</span>
        </Grid>

        <Grid item xs={12}>
          <h4>Headers: </h4>
        </Grid>

        <Grid item xs={12}>
          {/* TODO: add add-headers button */}
          {headers.map(({ key, value }) => (
            <li key={uuidv4()}>{`key: ${key}: value: ${value}`}</li>
          ))}
          {/* TODO: add headers table */}
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
