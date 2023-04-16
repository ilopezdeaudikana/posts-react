import { NewPost } from './new-post';
import { render, cleanup, waitFor, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
afterEach(cleanup);

describe('New Post Form', () => {
  it('Inputing text enables the button', async () => {
    const mockStore = configureStore();
    
    const store = mockStore({});
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const { getAllByRole, getByText, getByTestId } = render(
      <Provider store={store}>
        <NewPost userId={1}/>
      </Provider>
    );
    const showForm = getByText('Create new Post');
    await userEvent.click(showForm);
    const inputs = [getByTestId('title'), getByTestId('body')];
    inputs.forEach((input) => userEvent.type(input, 'a'));
    const buttons = getAllByRole('button');
    await waitFor(() => expect(buttons[1]).not.toBeDisabled());
    userEvent.click(buttons[1]);
    await waitFor(() => expect(dispatchSpy).toHaveBeenCalled());
  });

  it('Submit button should be disabled', async () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const { getByRole, getAllByRole, queryByTestId, getByTestId } = render(
      <Provider store={store}>
        <NewPost userId={1}/>
      </Provider>
    );
    const showForm = getByRole('button');
    await userEvent.click(showForm);
    const submit = getByTestId('submit');
    await waitFor(() => expect(submit).toBeDisabled());
    const form = queryByTestId('form');
    await waitFor(() => expect(form).not.toBeNull());
  });

  it('Form should not be there', async () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const { queryByTestId } = render(
      <Provider store={store}>
        <NewPost userId={1}/>
      </Provider>
    );
    const form = queryByTestId('form');
    expect(form).toBeNull();
  });
});
