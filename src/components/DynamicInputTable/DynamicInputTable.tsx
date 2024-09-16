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

export interface ILegendCeil<T> {
  width: number | string;
  value: string | PathValue<T, Path<T>>;
}

export interface ICeil<T> extends ILegendCeil<T> {
  key: string;
  name: Path<T>;
  value: PathValue<T, Path<T>>;
  onBlur?: () => void;
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
    >
      {legends.map((legend, index) => {
        const key = `legend - ${index}`;

        return (
          <Box sx={{ width: legend.width }} key={key}>
            {legend.value}
          </Box>
        );
      })}
    </Stack>
    {rows.map((row, rowIndex) => {
      const key = `row -${rowIndex}`;

      return (
        <Stack
          direction='row'
          spacing={1}
          divider={<Divider orientation='vertical' flexItem />}
          key={key} // Используем индекс строки
        >
          {row.map((ceil) => (
            <Controller
              name={ceil.name}
              control={control}
              defaultValue={ceil.value}
              key={ceil.key} // Используем ключ из данных
              render={({ field }) => (
                <TextField
                  {...field}
                  variant='standard'
                  autoComplete='off'
                  sx={{ width: ceil.width }}
                  onBlur={ceil.onBlur} // Обрабатываем blur
                />
              )}
            />
          ))}
          <IconButton
            aria-label='delete'
            size='small'
            onClick={() => remove(rowIndex)} // Удаляем строку
          >
            <DeleteForever />
          </IconButton>
        </Stack>
      );
    })}
  </Stack>
);

export default DynamicInputTable;
