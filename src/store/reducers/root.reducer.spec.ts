import { initialState } from '../initialState';
import { User, PostFromApi } from './../../models/models';
import { PostsAppActions } from '../actions/actions';
import { postsReducer, userReducer, usersReducer } from './root.reducer';

const post: PostFromApi = { id: 5, userId: 1, title: 'title', body: 'body' };
const user: User = { id: 14, name: 'User name' };

describe('postsReducer', () => {
  it('should set posts', () => {
    const state = postsReducer(initialState.posts, {
      type: PostsAppActions.SET_POSTS,
      payload: post,
    });
    expect(state).toEqual([post]);
  });

  it('should set a new post', () => {
    const state = postsReducer([post], {
      type: PostsAppActions.SET_NEW_POST,
      payload: { id: 8, userId: 1, title: 'new title', body: 'body' },
    });
    expect(state.length).toBe(2);
  });

  it('should do nothing', () => {
    const state = postsReducer(initialState.posts, {
      type: 'DUMMY_ACTION',
      payload: { id: 5, userId: 1, title: 'title', body: 'body' },
    });
    expect(state).toEqual([]);
  });
});

describe('userReducer', () => {
  it('should set a user', () => {
    const state = userReducer(initialState.user, {
      type: PostsAppActions.SET_USER,
      payload: user,
    });
    expect(state).toEqual(user);
  });

  it('should do nothing', () => {
    const state = userReducer(initialState.user, {
      type: 'DUMMY_ACTION',
      payload: user,
    });
    expect(state).toBeNull();
  });
});

describe('usersReducer', () => {
  it('should set a user', () => {
    const state = usersReducer(initialState.users, {
      type: PostsAppActions.SET_USERS,
      payload: [user],
    });
    expect(state).toEqual([user]);
  });

  it('should do nothing', () => {
    const state = usersReducer(initialState.users, {
      type: 'DUMMY_ACTION',
      payload: [user],
    });
    expect(state).toEqual([]);
  });
});
