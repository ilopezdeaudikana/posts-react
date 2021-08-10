import { MyPosts } from './my-posts';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(cleanup);

let mockStore: any;
let store: any;
describe('MyPosts component', () => {
  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore({});
  });
  it('should display a post title', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyPosts
          posts={[{ id: 5, userId: 1, title: 'title', body: 'body' }]}
          id={1}
        />
      </Provider>
    );
    const title = getByText('title');
    expect(title).toBeInTheDocument();
  });

  it('should not display any post title', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <MyPosts posts={[{ userId: 1, title: 'title', body: 'body' }]} id={2} />
      </Provider>
    );
    const title = queryByText('title');
    expect(title).toBeNull();
  });
});
