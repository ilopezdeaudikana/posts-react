import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from '../initialState';
import { User } from '../../models/models';


const usersSlice = createSlice({
  name: 'users',
  initialState: initialState.users,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.list = state.list.concat(action.payload)
    }
  }
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer