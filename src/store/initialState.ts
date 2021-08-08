import { State, User } from '../models/models';

export const initialState: State = {
  posts: [],
  users: [],
  user: (null as unknown) as User
};
