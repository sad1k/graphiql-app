'use client';

import { IRestClientForm } from '@/types/rest-client-form';
import { TMethod } from '@/utils/restclient/method-type';
import {
  Box,
  FormControl,
  Grid,
  GridSize,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface IMethodSelect {
  initialValue: TMethod;
  xs?: boolean | GridSize;
}

const MethodSelect = ({ initialValue, xs }: IMethodSelect) => {
  const { control } = useFormContext<IRestClientForm>();

  return (
    <Grid item xs={xs}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='method-selector-label'>Method</InputLabel>
          <Controller
            name='method'
            control={control}
            defaultValue={initialValue}
            render={({ field }) => (
              <Select {...field} labelId='method-selector-label' label='Method'>
                <MenuItem value='GET'>GET</MenuItem>
                <MenuItem value='POST'>POST</MenuItem>
                <MenuItem value='PUT'>PUT</MenuItem>
                <MenuItem value='PATCH'>PATCH</MenuItem>
                <MenuItem value='DELETE'>DELETE</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Box>
    </Grid>
  );
};

export default MethodSelect;
