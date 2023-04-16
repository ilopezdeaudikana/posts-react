import { MyPosts } from './my-posts'
import { render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { RenderRouteWithOutletContext } from '../router-with-context'

afterEach(cleanup)

let mockStore: any
let store: any

describe('MyPosts component', () => {
  beforeEach(() => {
    mockStore = configureStore()
    store = mockStore({})
  })
  it('should display a post title', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <RenderRouteWithOutletContext context={[[{
          id: 4,
          userId: 2,
          title: 'My title',
          body: 'Body'
        }],2]}>
          <MyPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const title = getByText('My title')
    expect(title).toBeInTheDocument()
  })

  it('should not display any post title', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <RenderRouteWithOutletContext context={[
                      [{
                        id: 4,
                        userId: 14,
                        title: 'My title',
                        body: 'Body'
                      }], 2]} >
              <MyPosts />
        </RenderRouteWithOutletContext>
      </Provider>
    )
    const title = queryByText('title')
    expect(title).toBeNull()
  })
})
