import { mergeUsersAndPosts } from './merge-users-and-posts'
import { User, PostFromApi, Post } from '../models/models'

describe('mergeUsersAndPosts', () => {
  it('Should add user names to posts', async () => {
    const users: User[] = [{ id: 1, name: 'text name' }]
    const apiPosts: PostFromApi[] = [
      { id: 5, userId: 1, title: 'title', body: 'body' },
    ]
    const posts: Post[] = mergeUsersAndPosts(users, apiPosts, 5)
    expect(posts).toEqual([
      { id: 5, username: 'text name', userId: 1, title: 'title', body: 'body' },
    ])
  })
})
