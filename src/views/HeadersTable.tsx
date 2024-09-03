'use client';

import DynamicInputTable, {
  ICeil,
} from '@/components/DynamicInputTable/DynamicInputTable';
import { THeaders } from '@/types/headers';
import { useState } from 'react';

interface IHeadersTable {
  initialHeaders: THeaders;
}

const HeadersTable = ({ initialHeaders }: IHeadersTable) => {
  const [headers, _setHeaders] = useState<THeaders>(initialHeaders);

  const legends: ICeil[] = [
    { value: 'key', width: 0.3 },
    { value: 'value', width: 0.7 },
  ];
  const rows: ICeil[][] = headers.map((header) => [
    { value: header.key, width: 0.3 },
    { value: header.value, width: 0.65 },
  ]);

  return <DynamicInputTable legends={legends} rows={rows} />;
};

export default HeadersTable;
