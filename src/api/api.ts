import { User, Post } from '../models/models';

const server = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<User[]> => {
  const response: Response = await fetch(`${server}/users`);
  const users: User[] = await response.json();
  return users;
};

export const getUser = async (email: string): Promise<User[]> => {
  const response: Response = await fetch(`${server}/users?email=${email}`);
  const users: User[] = await response.json();
  return users;
};

export const getPosts = async (): Promise<Post[]> => {
  const response: Response = await fetch(`${server}/posts`);
  const posts: Post[] = await response.json();
  return posts;
};

export const createPost = async (post: Post): Promise<{ id: number }> => {
  const response: Response = await fetch(`${server}/posts`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(post),
  });
  const apiPost: { id: number } = await response.json();
  return apiPost;
};
