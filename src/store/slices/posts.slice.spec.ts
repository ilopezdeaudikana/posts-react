import { Post } from '../../models/models'
import postReducer, { setPosts, setNewPost } from './posts.slice'

describe('posts reducer', () => {
  const initialState = { posts: { list: [] } }

  it('should handle initial state', () => {
    expect(postReducer(undefined, { type: 'unknown' })).toEqual({
      list: []
    })
  })

  it('should handle new posts', () => {
    const posts: Post[] = [
      {
        userId: 123,
        id: 12345,
        title: 'string',
        body: 'string',
        username: 'dummy name'
      }
    ]

    const actual = postReducer(initialState.posts, setPosts(posts))
    expect(actual).toEqual({ list: posts })
  })
})
