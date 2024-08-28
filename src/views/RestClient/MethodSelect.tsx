'use client';

import { TMethod } from '@/utils/restclient/method-type';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

interface IMethodSelect {
  initialValue: TMethod;
}

const MethodSelect = ({ initialValue }: IMethodSelect) => {
  const [method, setMethod] = useState<TMethod>(initialValue);
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
          <MenuItem value='GET'>GET</MenuItem>
          <MenuItem value='POST'>POST</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MethodSelect;
