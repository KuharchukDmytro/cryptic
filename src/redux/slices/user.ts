import { User } from '@/types/entities/User';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: 0,
  email: '',
  username: '',
  avatarUrl: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state: User, action: PayloadAction<Partial<User>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
