import { Login } from './login';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
afterEach(cleanup);

describe('Login Form', () => {
  it('Inputing text updates the state', async () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const { getByLabelText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const input = getByLabelText('Email address');
    fireEvent.change(input, {
      currentTarget: { value: 'Text' },
    });
    expect(input).toBeInTheDocument();
  });
});
