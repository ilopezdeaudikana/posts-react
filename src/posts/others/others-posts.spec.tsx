import { OthersPosts } from './others-posts';
import { render, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';

afterEach(cleanup);

let mockStore: any;
let store: any;
let useDispatchMock: any;
let useSelectorMock: any;

describe('OthersPosts component', () => {
  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore({});
    const mockedDispatch = jest.fn();
    useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    (useDispatchMock as jest.Mock).mockReturnValue(mockedDispatch);
    (useSelectorMock as jest.Mock).mockReturnValue([
      { id: 1, name: 'text name' },
    ]);
  });

  it('should dispatch fetch users', async () => {
    render(
      <Provider store={store}>
        <OthersPosts
          posts={[{ id: 5, userId: 1, title: 'title', body: 'body' }]}
          id={1}
        />
      </Provider>
    );
    await waitFor(() => expect(useSelectorMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(useDispatchMock).toHaveBeenCalledTimes(1));
  });

  it('should display a post username', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <OthersPosts
          posts={[{ id: 5, userId: 1, title: 'title', body: 'body' }]}
          id={1}
        />
      </Provider>
    );
    const username = queryByText('text name');
    await waitFor(() => expect(username).toBeNull());
  });

  it('should not display any post username', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <OthersPosts
          posts={[{ id: 5, userId: 1, title: 'title', body: 'body' }]}
          id={2}
        />
      </Provider>
    );
    const username = getByText('text name');
    await waitFor(() => expect(username).toBeInTheDocument());
  });

  it('should not display any post', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <OthersPosts posts={[]} id={2} />
      </Provider>
    );
    const title = queryByText('title');
    await waitFor(() => expect(title).toBeNull());
  });
});
