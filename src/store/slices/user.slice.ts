import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from '../initialState';
import { User } from '../../models/models';


const userSlice = createSlice({
  name: 'user',
  initialState: initialState.user,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.item = action.payload 
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer