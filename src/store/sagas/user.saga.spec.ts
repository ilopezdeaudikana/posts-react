import { runSaga } from 'redux-saga';
import { fetchUser, fetchUsers } from './user.saga';
import { User } from '../../models/models';

import { PostsAppActions } from '../actions/actions';
import * as api from '../../api/api';

describe('fetchUser', () => {
  it('should call posts api and dispatch success action', async () => {
    const user: User = { id: 5, name: 'Text name' };
    const requestUser = jest
      .spyOn(api, 'getUser')
      .mockImplementation(() => Promise.resolve([user]));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUser as any,
      { payload: { email: 'some@email.com', history: { push: jest.fn() } } }
    );

    expect(requestUser).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: PostsAppActions.SET_USER, payload: user },
    ]);
    requestUser.mockClear();
  });
});

describe('fetchUsers', () => {
  it('should call users api and dispatch success action', async () => {
    const users: User[] = [{ id: 5, name: 'Text name' }];
    const usersRequest = jest
      .spyOn(api, 'getUsers')
      .mockImplementation(() => Promise.resolve(users));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUsers as any
    );

    expect(usersRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: PostsAppActions.SET_USERS, payload: users },
    ]);
    usersRequest.mockClear();
  });

  // TODO: Same thing with fetchUser error.
  it('should call api and dispatch error action', async () => {
    const requestUsers = jest
      .spyOn(api, 'getUsers')
      .mockImplementation(() => Promise.reject([]));
    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUsers as any
    );

    expect(requestUsers).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: PostsAppActions.SET_USERS, payload: [] },
    ]);
    requestUsers.mockClear();
  });
});
