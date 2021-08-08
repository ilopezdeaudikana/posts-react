import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { State, PostFromApi, Post } from '../../models/models';
import { mergeUsersAndPosts } from '../merge-users-and-posts';
import { PostCard } from '../card/post-card';

export const OthersPosts = (props: { posts: PostFromApi[]; id: number }) => {
  const { posts, id } = props;
  const users = useSelector((state: State) => state.users);
  const list: Post[] = mergeUsersAndPosts(users, posts, id);

  return (
    <Fragment>
      {list.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Fragment>
  );
};
