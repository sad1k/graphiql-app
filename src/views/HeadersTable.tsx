'use client';

import { THeaders } from '@/types/headers';
import { DeleteForever } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IHeadersTable {
  initialHeaders: THeaders;
}

const HeadersTable = ({ initialHeaders }: IHeadersTable) => {
  const [headers, _setHeaders] = useState<THeaders>(initialHeaders);

  return (
    <Stack spacing={2}>
      <Stack
        direction='row'
        spacing={1}
        divider={<Divider orientation='vertical' flexItem />}
        key={uuidv4()}
      >
        <Box sx={{ width: 0.3 }}>Key</Box>
        <Box sx={{ width: 0.7 }}>Value</Box>
      </Stack>
      {headers.map((header) => (
        <Stack
          direction='row'
          spacing={1}
          divider={<Divider orientation='vertical' flexItem />}
          key={uuidv4()}
        >
          <TextField
            variant='standard'
            autoComplete='off'
            defaultValue={header.key}
            sx={{ width: 0.3 }}
          />
          <TextField
            variant='standard'
            autoComplete='off'
            defaultValue={header.value}
            sx={{ width: 0.65 }}
          />
          <IconButton aria-label='delete' size='small'>
            <DeleteForever />
          </IconButton>
        </Stack>
      ))}
    </Stack>
  );
};

export default HeadersTable;
