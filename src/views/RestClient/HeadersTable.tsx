'use client';

import DynamicInputTable, {
  ICeil,
  ILegendCeil,
} from '@/components/DynamicInputTable/DynamicInputTable';
import { THeaders } from '@/types/headers';
import { IRestClientForm } from '@/types/rest-client-form';
import { Button, Grid, GridSize } from '@mui/material';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { v4 as uuidv4 } from 'uuid';

interface IHeadersTable {
  initialHeaders: THeaders;
  xs?: boolean | GridSize;
}

const HeadersTable = ({ initialHeaders, xs }: IHeadersTable) => {
  const { control } = useFormContext<IRestClientForm>();
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

  const legends: ILegendCeil<IRestClientForm>[] = [
    { value: 'key', width: 0.3 },
    { value: 'value', width: 0.7 },
  ];

  const rows: ICeil<IRestClientForm>[][] = fields.map((header, index) => [
    {
      value: header.key,
      width: 0.3,
      key: uuidv4(),
      name: `headers.${index}.key`,
    },
    {
      value: header.value,
      width: 0.65,
      key: uuidv4(),
      name: `headers.${index}.value`,
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
