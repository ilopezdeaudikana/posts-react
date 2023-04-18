import { NewPost } from './new-post'
import { render, cleanup, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
afterEach(cleanup)

describe('New Post Form', () => {
  it('Inputing text enables the button', async () => {
    const mockStore = configureStore()
    
    const store = mockStore({})
    const dispatchSpy = jest.spyOn(store, 'dispatch')
    render(
      <Provider store={store}>
        <NewPost userId={1}/>
      </Provider>
    )
    const showForm = screen.getByText('Create new Post')
    await userEvent.click(showForm)
    const inputs = [screen.getByTestId('title'), screen.getByTestId('body')]
    inputs.forEach((input) => userEvent.type(input, 'a'))
    const buttons = screen.getAllByRole('button')
    await waitFor(() => expect(buttons[1]).not.toBeDisabled())
    userEvent.click(buttons[1])
    await waitFor(() => expect(dispatchSpy).toHaveBeenCalled())
  })

  it('Submit button should be disabled', async () => {
    const mockStore = configureStore()
    const store = mockStore({})
    render(
      <Provider store={store}>
        <NewPost userId={1}/>
      </Provider>
    )
    const showForm = screen.getByRole('button')
    await userEvent.click(showForm)
    const submit = screen.getByTestId('submit')
    await waitFor(() => expect(submit).toBeDisabled())
    const form = screen.queryByTestId('form')
    await waitFor(() => expect(form).not.toBeNull())
  })

  it('Form should not be there', async () => {
    const mockStore = configureStore()
    const store = mockStore({})
    render(
      <Provider store={store}>
        <NewPost userId={1}/>
      </Provider>
    )
    const form = screen.queryByTestId('form')
    expect(form).toBeNull()
  })
})
