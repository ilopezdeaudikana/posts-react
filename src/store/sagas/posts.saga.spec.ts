import { runSaga } from 'redux-saga';
import { fetchPosts, newPost } from './posts.saga';
import { Post } from '../../models/models';

import { PostsAppActions } from '../actions/actions';
import * as api from '../../api/api';

describe('fetchPosts', () => {
  it('should call posts api and dispatch success action', async () => {
    const post: Post = { id: 5, userId: 1, title: 'title', body: 'body' };
    const requestPosts = jest
      .spyOn(api, 'getPosts')
      .mockImplementation(() => Promise.resolve([post]));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPosts as any
    );

    expect(requestPosts).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: PostsAppActions.SET_POSTS, payload: [post] },
    ]);
    requestPosts.mockClear();
  });
  // TODO: Same thing with NewPost error.
  it('should call api and dispatch error action', async () => {
    const error = { message: 'ERROR' };
    const requestPosts = jest
      .spyOn(api, 'getPosts')
      .mockImplementation(() => Promise.reject(error));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPosts as any
    );

    expect(requestPosts).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: PostsAppActions.SET_POSTS, payload: [] },
    ]);
    requestPosts.mockClear();
  });
});
describe('createPost', () => {
  it('should call new post api and dispatch success action', async () => {
    const post: Post = { userId: 1, title: 'title', body: 'body' };
    const createPost = jest
      .spyOn(api, 'createPost')
      .mockImplementation(() => Promise.resolve({ id: 5 }));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      newPost as any,
      { payload: post }
    );

    expect(createPost).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: PostsAppActions.SET_NEW_POST, payload: { id: 5, ...post } },
    ]);
    createPost.mockClear();
  });
});
