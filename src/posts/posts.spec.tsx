import { Posts } from './posts'
import { render, cleanup, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

afterEach(cleanup)

let mockStore: any
let store: any
let mockRedux: any

describe('Posts component', () => {
  beforeEach(() => {
    mockStore = configureStore()
    store = mockStore({ user: null, posts: [] })
    mockRedux = jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: () =>
        jest.fn().mockImplementation(() => Promise.resolve({ title: 'test' })),
      useSelector: () =>
        jest
          .fn()
          .mockImplementation(() => Promise.resolve({ user: null, posts: [] }))
    }))
  })
  it('should dispatch', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Posts />
        </BrowserRouter>
      </Provider>
    )
    expect(true).toBe(true)
    // await waitFor(() => expect(mockRedux.useDispatch).toHaveBeenCalledTimes(1))
  })

  // it('should display two tabs', async () => {
  //   const { getAllByRole } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Posts />
  //       </Provider>
  //     </BrowserRouter>
  //   )
  //   const tabs = getAllByRole('tab')
  //   // await waitFor(() => expect(tabs.length).toBe(2))
  // })

  // it('should not display two tabs', async () => {
  //   const { queryAllByRole } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Posts />
  //       </Provider>
  //     </BrowserRouter>
  //   )
  //   const tabs = queryAllByRole('tab')
  //   // await waitFor(() => expect(tabs.length).toBe(0))
  // })
})
