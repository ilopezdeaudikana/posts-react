import { call, put, takeEvery } from 'redux-saga/effects';
import { Post, Action } from '../../models/models';
import { PostsAppActions } from '../actions/actions';
import { getPosts, createPost } from '../../api/api';
import { setNewPost, setPosts } from '../slices/posts.slice';

export function* fetchPosts() {
  try {
    const posts: Post[] = yield call(getPosts);
    yield put(setPosts(posts));
  } catch (e) {
    console.log(e);
    yield put(setPosts([]));
  }
}

export function* newPost(action: Action) {
  try {
    const post: { id: number } = yield call(createPost, action.payload);
    yield put(setNewPost({ ...post, ...action.payload }));
  } catch (e) {
    console.log(e);
    yield put(setNewPost({} as Post));
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
