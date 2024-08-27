'use client';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

type TMethod = 'get' | 'post';

interface IMethodSelect {
  initialValue?: TMethod;
}

const MethodSelect = ({ initialValue }: IMethodSelect) => {
  const [method, setMethod] = useState<TMethod>(initialValue || 'get');
  const handleChange = (event: SelectChangeEvent) => {
    setMethod(event.target.value as TMethod);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='method-selector-label'>Method</InputLabel>
        <Select
          labelId='method-selector-label'
          label='Method'
          value={method}
          onChange={handleChange}
        >
          <MenuItem value='get'>GET</MenuItem>
          <MenuItem value='post'>POST</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MethodSelect;
