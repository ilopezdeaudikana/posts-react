import { Post, User, PostFromApi } from '../../models/models';

export class PostsAppActions {
  public static SET_POSTS = '[PostsAppActions] Set posts';
  public static SET_NEW_POST = '[PostsAppActions] Set new post';
  public static CREATE_POST = '[PostsAppActions] Create a new post';
  public static SET_USER = '[PostsAppActions] Set user';
  public static SET_USERS = '[PostsAppActions] Set users';
  public static FETCH_USER = '[PostsAppActions] Fetch user from API';
  public static FETCH_USERS = '[PostsAppActions] Fetch users from API';
  public static FETCH_POSTS = '[PostsAppActions] Fetch posts from API';
  public static AUTH_SUCCESS = '[PostsAppActions] Redirect after logged in';
  public static AUTH_FAILURE = '[PostsAppActions] Unable to log in';
}

export const SetUsers = (users: User[]) => ({
  type: PostsAppActions.SET_USERS,
  payload: users,
});

export const SetPosts = (posts: Post[]) => ({
  type: PostsAppActions.SET_POSTS,
  payload: posts,
});

export const CreatePost = (post: PostFromApi) => ({
  type: PostsAppActions.CREATE_POST,
  payload: post,
});

export const SetNewPost = (post: PostFromApi) => ({
  type: PostsAppActions.SET_NEW_POST,
  payload: post,
});

export const SetUser = (user: User) => ({
  type: PostsAppActions.SET_USER,
  payload: user,
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

export const FetchUser = (email: string) => ({
  type: PostsAppActions.FETCH_USER,
  payload: email,
});
