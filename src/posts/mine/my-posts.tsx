import { Fragment } from 'react';
import { useOutletContext } from 'react-router-dom'
import { PostFromApi, Post } from '../../models/models';
import { NewPost } from '../new/new-post';
import { PostCard } from '../card/post-card';

export const MyPosts = () => {
  const [posts, id] = useOutletContext<[posts: PostFromApi[], id: number ]>()
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
