import { Posts } from './posts';
import { render, cleanup, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import history from '../history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(cleanup);

let mockStore: any;
let store: any;
let useSelectorMock: any;
let useDispatchMock: any;
describe('Posts component', () => {
  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore({});
    const mockedDispatch = jest.fn();
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    (useDispatchMock as jest.Mock).mockReturnValue(mockedDispatch);
    (useSelectorMock as jest.Mock).mockReturnValue({
      user: { id: 1, name: 'text name' },
      posts: [],
    });
  });
  it('should dispatch', async () => {
    render(
      <Router history={history}>
        <Provider store={store}>
          <Posts />
        </Provider>
      </Router>
    );
    await waitFor(() => expect(useDispatchMock).toHaveBeenCalledTimes(1));
  });

  it('should display two tabs', async () => {
    const { getAllByRole } = render(
      <Router history={history}>
        <Provider store={store}>
          <Posts />
        </Provider>
      </Router>
    );
    const tabs = getAllByRole('tab');
    await waitFor(() => expect(tabs.length).toBe(2));
  });

  it('should not display two tabs', async () => {
    (useSelectorMock as jest.Mock).mockReturnValue({
        user: null,
        posts: [],
      });
    const { queryAllByRole } = render(
      <Router history={history}>
        <Provider store={store}>
          <Posts />
        </Provider>
      </Router>
    );
    const tabs = queryAllByRole('tab');
    await waitFor(() => expect(tabs.length).toBe(0));
  });

});
