import { DeleteForever } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export interface ICeil {
  width: number | string;
  value: string;
}

export interface IDynamicInputTable {
  legends: ICeil[];
  rows: ICeil[][];
}

const DynamicInputTable = ({ legends, rows }: IDynamicInputTable) => (
  <Stack spacing={2}>
    <Stack
      direction='row'
      spacing={1}
      divider={<Divider orientation='vertical' flexItem />}
      key={uuidv4()}
    >
      {legends.map((ceil) => (
        <Box sx={{ width: ceil.width }} key={uuidv4()}>
          {ceil.value}
        </Box>
      ))}
    </Stack>
    {rows.map((row) => (
      <Stack
        direction='row'
        spacing={1}
        divider={<Divider orientation='vertical' flexItem />}
        key={uuidv4()}
      >
        {row.map((ceil) => (
          <TextField
            variant='standard'
            autoComplete='off'
            defaultValue={ceil.value}
            sx={{ width: ceil.width }}
            key={uuidv4()}
          />
        ))}
        <IconButton aria-label='delete' size='small'>
          <DeleteForever />
        </IconButton>
      </Stack>
    ))}
  </Stack>
);

export default DynamicInputTable;
