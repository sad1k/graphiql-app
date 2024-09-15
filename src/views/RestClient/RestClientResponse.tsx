import CodeEditor from '@/components/CodeEditor/CodeEditor';
import getResponseColor from '@/utils/restclient/get-response-color';
import getResponseStatus from '@/utils/restclient/get-response-status';
import { Box, Grid, Paper, Typography } from '@mui/material';

interface IRestClientResponse {
  status: number;
  data: string;
}
const RestClientResponse = ({ data, status }: IRestClientResponse) => (
  <Box component='section' sx={{ width: 1, paddingX: 10 }}>
    <Paper sx={{ padding: 3, mx: 0.5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>Response</h3>
        </Grid>
        <Grid item xs={1}>
          <h4>Status code</h4>
        </Grid>
        <Grid item xs={1}>
          <span>{status}</span>
        </Grid>
        <Grid item xs={1}>
          <Typography color={getResponseColor(status)}>
            {getResponseStatus(status)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <h4>Body</h4>
          <CodeEditor initialValue={data} isEditable={false} />
        </Grid>
        <Grid item xs={12}>
          <div>{data}</div>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default RestClientResponse;
