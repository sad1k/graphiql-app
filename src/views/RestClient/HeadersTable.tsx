'use client';

import DynamicInputTable, {
  ICeil,
  ILegendCeil,
} from '@/components/DynamicInputTable/DynamicInputTable';
import { THeaders } from '@/types/headers';
import { IRestClientForm } from '@/types/rest-client-form';
import { Grid, GridSize } from '@mui/material';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
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

  const legends: ILegendCeil[] = [
    { value: 'key', width: 0.3 },
    { value: 'value', width: 0.7 },
  ];

  const rows: ICeil[][] = fields.map((header, index) => [
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
    <Grid item xs={xs}>
      <DynamicInputTable
        legends={legends}
        rows={rows}
        remove={remove}
        control={control}
      />
    </Grid>
  );
};

export default HeadersTable;
