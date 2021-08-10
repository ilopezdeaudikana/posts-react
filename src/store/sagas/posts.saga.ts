import { call, put, takeEvery } from 'redux-saga/effects';
import { Post, Action } from '../../models/models';
import { PostsAppActions, SetPosts, SetNewPost } from '../actions/actions';
import { getPosts, createPost } from '../../api/api';

export function* fetchPosts() {
  try {
    const posts: Post[] = yield call(getPosts);
    yield put(SetPosts(posts));
  } catch (e) {
    console.log(e);
    yield put(SetPosts([]));
  }
}

export function* newPost(action: Action) {
  try {
    const post: { id: number } = yield call(createPost, action.payload);
    yield put(SetNewPost({ ...post, ...action.payload }));
  } catch (e) {
    console.log(e);
    yield put(SetNewPost({} as Post));
  }
}

/*
  Starts fetchUser on each dispatched `posts_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* postsSaga() {
  yield takeEvery(PostsAppActions.CREATE_POST, newPost);
  yield takeEvery(PostsAppActions.FETCH_POSTS, fetchPosts);
}

export default postsSaga;
