'use client';

import DynamicInputTable, {
  ICeil,
} from '@/components/DynamicInputTable/DynamicInputTable';
import { THeaders } from '@/types/headers';
import { Grid, GridSize } from '@mui/material';
import { useState } from 'react';

interface IHeadersTable {
  initialHeaders: THeaders;
  xs?: boolean | GridSize;
}

const HeadersTable = ({ initialHeaders, xs }: IHeadersTable) => {
  const [headers, _setHeaders] = useState<THeaders>(initialHeaders);

  const legends: ICeil[] = [
    { value: 'key', width: 0.3 },
    { value: 'value', width: 0.7 },
  ];
  const rows: ICeil[][] = headers.map((header) => [
    { value: header.key, width: 0.3 },
    { value: header.value, width: 0.65 },
  ]);

  return (
    <Grid item xs={xs}>
      <DynamicInputTable legends={legends} rows={rows} />
    </Grid>
  );
};

export default HeadersTable;
