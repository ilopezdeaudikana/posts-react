import { State, User } from '../models/models'

export const initialState: State = {
  posts: { list: [] },
  users: { list: [] },
  user: { item: {} as User }
}
