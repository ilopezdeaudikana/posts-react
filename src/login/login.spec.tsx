import { Login } from './login'
import { render, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
afterEach(cleanup)

describe('Login Form', () => {
  it('Inputing text enables the button', async () => {
    const mockStore = configureStore()

    const store = mockStore({})
    const dispatchSpy = jest.spyOn(store, 'dispatch')
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    )
    const input = getByRole('textbox')
    userEvent.type(input, 'a')
    const submit = getByRole('button')
    await waitFor(() => expect(submit).not.toBeDisabled())
    userEvent.click(submit)
    await waitFor(() => expect(dispatchSpy).toHaveBeenCalled())
  })

  it('Submit button should be disabled', async () => {
    const mockStore = configureStore()
    const store = mockStore({})
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    )
    const submit = getByRole('button')
    expect(submit).toBeDisabled()
  })
})
