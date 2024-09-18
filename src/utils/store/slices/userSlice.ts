import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { IFetchUser } from '@/types/IUser';

export interface IAuthState {
  authState: IFetchUser | null;
}

const initialState: IAuthState = {
  authState: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<IFetchUser>) => {
      state.authState = payload;
    },
    removeAuthState: (state) => {
      state.authState = null;
    },
  },
});

export const { setAuthState, removeAuthState } = userSlice.actions;

export default userSlice.reducer;
