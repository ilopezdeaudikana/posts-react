export interface PostFromApi {
  userId: number
  id?: number
  title: string
  body: string
}

export interface Post extends PostFromApi {
  username?: string
}

export interface User {
  id: number
  name: string
}

export interface State {
  posts: { list: PostFromApi[] }
  user: { item: User }
  users: { list: User[] }
}

export interface TabLink {
  label: string
  link: string
  isActive: boolean
}

export interface Action {
  type: string
  payload: any
}
