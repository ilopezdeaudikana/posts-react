import { User, PostFromApi, Post } from '../models/models';

export const mergeUsersAndPosts = (
  users: User[],
  posts: PostFromApi[],
  id: number
): Post[] => {
  const othersPosts = posts.filter(
    (post: PostFromApi) => post.userId !== id
  );
  return othersPosts.map((post: PostFromApi) => {
    const user = users.find((user: User) => user.id === post.userId);
    return { ...post, username: user ? user.name : '' };
  });
};
