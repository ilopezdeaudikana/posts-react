import { combineReducers } from 'redux';
import { initialState } from '../initialState';
import { User, PostFromApi, Post, Action } from './../../models/models';
import { PostsAppActions } from '../actions/actions';

export const postsReducer = (
  state: PostFromApi[] = initialState.posts,
  action: Action
): Post[] => {
  switch (action.type) {
    case PostsAppActions.SET_POSTS:
      return [].concat(action.payload);
    case PostsAppActions.SET_NEW_POST:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export const userReducer = (
  state: User = initialState.user,
  action: Action
): User => {
  switch (action.type) {
    case PostsAppActions.SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const usersReducer = (
  state: User[] = initialState.users,
  action: Action
): User[] => {
  switch (action.type) {
    case PostsAppActions.SET_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
  users: usersReducer,
});
