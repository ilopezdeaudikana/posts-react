import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, PostFromApi, Post } from '../../models/models';
import { mergeUsersAndPosts } from '../merge-users-and-posts';
import { FetchUsers } from '../../store/actions/actions';

import { PostCard } from '../card/post-card';
import { useOutletContext } from 'react-router-dom';

export const OthersPosts = () => {
  const [posts, id] = useOutletContext<[posts: PostFromApi[], id: number ]>()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
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
