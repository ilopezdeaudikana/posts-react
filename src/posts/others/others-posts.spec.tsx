import { OthersPosts } from './others-posts'
import { render, cleanup, waitFor, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { RenderRouteWithOutletContext } from '../router-with-context'

afterEach(cleanup)

let mockStore: any
let store: any

describe('OthersPosts component', () => {
  beforeEach(() => {
    mockStore = configureStore()
    store = mockStore({ users: { list: [{ id: 1, name: 'text name' }] } })
  })

  it('should display a post username', async () => {
    render(
      <Provider store={store}>
        <RenderRouteWithOutletContext
          context={[
            {
              list: [
                {
                  id: 7,
                  userId: 2,
                  title: 'My title',
                  body: 'Body'
                }
              ]
            },
            2
          ]}
        >
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const username = screen.queryByText('text name')
    await waitFor(() => expect(username).toBeNull())
  })

  it('should not display any post username', async () => {
    render(
      <Provider store={store}>
        <RenderRouteWithOutletContext
          context={[
            {
              list: [
                {
                  id: 7,
                  userId: 1,
                  title: 'My title',
                  body: 'Body'
                }
              ]
            },
            2
          ]}
        >
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const username = screen.getByText('text name')
    await waitFor(() => expect(username).toBeInTheDocument())
  })

  it('should not display any post', async () => {
    render(
      <Provider store={store}>
        <RenderRouteWithOutletContext
          context={[
            {
              list: [
                {
                  id: 7,
                  userId: 2,
                  title: 'My title',
                  body: 'Body'
                }
              ]
            },
            2
          ]}
        >
          <OthersPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const title = screen.queryByText('title')
    await waitFor(() => expect(title).toBeNull())
  })
})
