import { Fragment } from 'react';
import { PostFromApi, Post } from '../../models/models';
import { NewPost } from '../new/new-post';
import { PostCard } from '../card/post-card';

export const MyPosts = (props: { posts: PostFromApi[]; id: number }) => {
  const { posts, id } = props;
  const list = posts.filter((post: PostFromApi) => post.userId === id);
  return (
    <Fragment>
      <NewPost userId={id} />
      {list.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Fragment>
  );
};
