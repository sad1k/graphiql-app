import { IFetchUser } from '@/types/IUser';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';

export interface ICartState {
  authState: IFetchUser | null;
}

const initialState: ICartState = {
  authState: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<IFetchUser>) => {
      state.authState = payload;
    },
  },
});

export const { setAuthState } = userSlice.actions;

export default userSlice.reducer;
