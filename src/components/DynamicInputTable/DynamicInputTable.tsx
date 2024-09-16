import { DeleteForever } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, TextField } from '@mui/material';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
  UseFieldArrayRemove,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

export interface ILegendCeil<T> {
  width: number | string;
  value: string | PathValue<T, Path<T>>;
  key?: string;
}

export interface ICeil<T> extends ILegendCeil<T> {
  key: string;
  name: Path<T>;
  value: PathValue<T, Path<T>>;
}

export interface IDynamicInputTable<T extends FieldValues> {
  legends: ILegendCeil<T>[];
  rows: ICeil<T>[][];
  remove: UseFieldArrayRemove;
  control: Control<T>;
}

const DynamicInputTable = <T extends FieldValues>({
  legends,
  rows,
  remove,
  control,
}: IDynamicInputTable<T>) => (
  <Stack spacing={2}>
    <Stack
      direction='row'
      spacing={1}
      divider={<Divider orientation='vertical' flexItem />}
      key={uuidv4()}
    >
      {legends.map((ceil) => (
        <Box sx={{ width: ceil.width }} key={ceil.key ?? uuidv4()}>
          {ceil.value}
        </Box>
      ))}
    </Stack>
    {rows.map((row, index) => (
      <Stack
        direction='row'
        spacing={1}
        divider={<Divider orientation='vertical' flexItem />}
        key={uuidv4()}
      >
        {row.map((ceil) => (
          <Controller
            name={ceil.name}
            control={control}
            defaultValue={ceil.value}
            key={ceil.key ?? uuidv4()}
            render={({ field }) => (
              <TextField
                {...field}
                variant='standard'
                autoComplete='off'
                sx={{ width: ceil.width }}
              />
            )}
          />
        ))}
        <IconButton
          aria-label='delete'
          size='small'
          onClick={() => {
            remove(index);
          }}
        >
          <DeleteForever />
        </IconButton>
      </Stack>
    ))}
  </Stack>
);

export default DynamicInputTable;
