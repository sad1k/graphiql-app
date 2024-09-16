import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IRequestBody {
  body: string;
}

const initialState: IRequestBody = {
  body: '',
};

const requestBodySlice = createSlice({
  name: 'requestBody',
  initialState,
  reducers: {
    saveRequestBody: (state, { payload }: PayloadAction<IRequestBody>) => {
      state.body = payload.body;
    },
    removeRequestBody: (state) => {
      state.body = '';
    },
  },
});

export const { saveRequestBody, removeRequestBody } = requestBodySlice.actions;

export default requestBodySlice.reducer;
