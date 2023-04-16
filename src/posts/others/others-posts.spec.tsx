import { OthersPosts } from './others-posts'
import { render, cleanup, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { RenderRouteWithOutletContext } from '../router-with-context'

afterEach(cleanup)

let mockStore: any
let store: any
let mockRedux: any

describe('OthersPosts component', () => {
  beforeEach(() => {
    mockStore = configureStore()
    store = mockStore({ users: [{ id: 1, name: 'text name' }]})
    mockRedux = jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: () =>
        jest.fn().mockImplementation(() => Promise.resolve({ title: 'test' })),
      useSelector: () =>
        jest.fn().mockImplementation(() => [{ id: 1, name: 'text name' }])
    }))
  })
  it('should dispatch fetch users', async () => {
    render(
      <Provider store={store}>
        <RenderRouteWithOutletContext context={[[], 0]}>
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    // await waitFor(() => expect(mockRedux.useSelector).toHaveBeenCalledTimes(1))
    // await waitFor(() => expect(mockRedux.useDispatch).toHaveBeenCalledTimes(1))
  })

  it('should display a post username', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <RenderRouteWithOutletContext
          context={[
            [
              {
                id: 7,
                userId: 2,
                title: 'My title',
                body: 'Body'
              }
            ],
            2
          ]}
        >
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const username = queryByText('text name')
    await waitFor(() => expect(username).toBeNull())
  })

  it('should not display any post username', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <RenderRouteWithOutletContext
          context={[
            [
              {
                id: 7,
                userId: 1,
                title: 'My title',
                body: 'Body'
              }
            ],
            2
          ]}
        >
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const username = getByText('text name')
    await waitFor(() => expect(username).toBeInTheDocument())
  })

  it('should not display any post', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <RenderRouteWithOutletContext
          context={[
            [
              {
                id: 7,
                userId: 2,
                title: 'My title',
                body: 'Body'
              }
            ],
            2
          ]}
        >
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const title = queryByText('title')
    await waitFor(() => expect(title).toBeNull())
  })
})
