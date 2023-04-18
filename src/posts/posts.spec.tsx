import { Posts } from './posts'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

afterEach(cleanup)

let mockStore: any
let store: any

describe('Posts component', () => {
  beforeEach(() => {
    mockStore = configureStore()
    store = mockStore({ user: {id: 123 }, posts: [] })
  })


  it('should display two tabs', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Posts />
        </Provider>
      </BrowserRouter>
    )
    const tabs = screen.getAllByRole('tab')
    await waitFor(() => expect(tabs.length).toBe(2))
  })
})
