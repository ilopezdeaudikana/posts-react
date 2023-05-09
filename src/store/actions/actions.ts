import { NavigateFunction } from 'react-router-dom';
import { User, PostFromApi } from '../../models/models';

export class PostsAppActions {
  public static CREATE_POST = '[PostsAppActions] Create a new post';
  public static FETCH_USER = '[PostsAppActions] Fetch user from API';
  public static FETCH_USERS = '[PostsAppActions] Fetch users from API';
  public static FETCH_POSTS = '[PostsAppActions] Fetch posts from API';
  public static AUTH_SUCCESS = '[PostsAppActions] Redirect after logged in';
  public static AUTH_FAILURE = '[PostsAppActions] Unable to log in';
}

export const CreatePost = (post: PostFromApi) => ({
  type: PostsAppActions.CREATE_POST,
  payload: post,
});

export const AuthSuccess = (user: User) => ({
  type: PostsAppActions.AUTH_SUCCESS,
  payload: user,
});

export const AuthFailure = () => ({
  type: PostsAppActions.AUTH_FAILURE,
  payload: null,
});

export const FetchPosts = () => ({
  type: PostsAppActions.FETCH_POSTS,
  payload: null,
});

export const FetchUsers = () => ({
  type: PostsAppActions.FETCH_USERS,
  payload: null,
});

export const FetchUser = (obj: {
  email: string;
  history: NavigateFunction;
}) => ({
  type: PostsAppActions.FETCH_USER,
  payload: obj,
});
