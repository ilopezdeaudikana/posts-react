import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from '../initialState';
import { Post } from './../../models/models';


const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState.posts,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.list = action.payload
    },
    setNewPost(state, action: PayloadAction<Post>) {
      state.list = state.list.concat(action.payload)
    }
  }
})

export const { setPosts, setNewPost } = postsSlice.actions
export default postsSlice.reducer