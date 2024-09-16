'use client';

import { Button, Grid, GridSize } from '@mui/material';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { v4 as uuidv4 } from 'uuid';
import { IRestClientInputs } from '@/types/rest-client-form';
import { THeaders } from '@/types/headers';
import DynamicInputTable, {
  ICeil,
  ILegendCeil,
} from '@/components/DynamicInputTable/DynamicInputTable';

interface IHeadersTable {
  initialHeaders: THeaders;
  xs?: boolean | GridSize;
  onBlur?: () => void;
}

const HeadersTable = ({ initialHeaders, xs, onBlur }: IHeadersTable) => {
  const { control } = useFormContext<IRestClientInputs>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'headers',
  });

  useEffect(() => {
    remove();
    initialHeaders.forEach((header) => {
      append(header);
    });
  }, []);

  const legends: ILegendCeil<IRestClientInputs>[] = [
    { value: 'key', width: 0.3 },
    { value: 'value', width: 0.7 },
  ];

  const rows: ICeil<IRestClientInputs>[][] = fields.map((header, index) => [
    {
      value: header.key,
      width: 0.3,
      key: uuidv4(),
      name: `headers.${index}.key`,
      onBlur,
    },
    {
      value: header.value,
      width: 0.65,
      key: uuidv4(),
      name: `headers.${index}.value`,
      onBlur,
    },
  ]);

  return (
    <>
      <Grid item xs={xs}>
        <DynamicInputTable
          legends={legends}
          rows={rows}
          remove={remove}
          control={control}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant='contained'
          endIcon={<AddBoxIcon />}
          sx={{
            width: 0.5,
            display: 'flex',
            mx: 'auto',
          }}
          onClick={() => {
            append({ key: '', value: '' });
          }}
        >
          Add header
        </Button>
      </Grid>
    </>
  );
};

export default HeadersTable;
