'use client';

import { TMethod } from '@/utils/restclient/method-type';
import {
  Box,
  FormControl,
  Grid,
  GridSize,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

interface IMethodSelect {
  initialValue: TMethod;
  xs?: boolean | GridSize;
}

const MethodSelect = ({ initialValue, xs }: IMethodSelect) => {
  const [method, setMethod] = useState<TMethod>(initialValue);
  const handleChange = (event: SelectChangeEvent) => {
    setMethod(event.target.value as TMethod);
  };

  return (
    <Grid item xs={xs}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='method-selector-label'>Method</InputLabel>
          <Select
            labelId='method-selector-label'
            label='Method'
            value={method}
            onChange={handleChange}
          >
            <MenuItem value='GET'>GET</MenuItem>
            <MenuItem value='POST'>POST</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default MethodSelect;
