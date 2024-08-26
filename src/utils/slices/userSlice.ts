import { IUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartState {
  user: IUser | null;
}

const initialState: ICartState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
