import { Button, Grid, GridSize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ISubmitButton {
  xs?: boolean | GridSize;
}

const SubmitButton = ({ xs }: ISubmitButton) => (
  <Grid item xs={xs}>
    <Button
      variant='contained'
      sx={{ height: 0.95, width: 1 }}
      endIcon={<SendIcon />}
      type='submit'
    >
      Send
    </Button>
  </Grid>
);

export default SubmitButton;
