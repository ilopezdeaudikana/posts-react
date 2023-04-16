import { call, put, takeEvery } from 'redux-saga/effects';
import { User, Action } from '../../models/models';
import { PostsAppActions, SetUser, SetUsers } from '../actions/actions';
import { getUser, getUsers } from '../../api/api';

export function* fetchUser(action: Action) {
  try {
    const user: User[] = yield call(getUser, action.payload.email);
    yield put(SetUser(user[0]));
    yield call(action.payload.history, `/posts/mine`);
  } catch (e: any) {
    yield put({ type: PostsAppActions.AUTH_FAILURE, message: e.message });
  }
}

export function* fetchUsers() {
  try {
    const users: User[] = yield call(getUsers);
    yield put(SetUsers(users));
  } catch (e) {
    yield put(SetUsers([]));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* userSaga() {
  yield takeEvery(PostsAppActions.FETCH_USER, fetchUser);
  yield takeEvery(PostsAppActions.FETCH_USERS, fetchUsers);
}

export default userSaga;
