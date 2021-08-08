import { Fragment, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';
import { MyPosts } from './mine/my-posts';
import { OthersPosts } from './others/others-posts';

import history from '../history';
import { FetchPosts, FetchUsers } from '../store/actions/actions';
import { State } from '../models/models';
import './posts.scss';

export const Posts = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchPosts());
    dispatch(FetchUsers());
  }, [dispatch]);

  const { posts, user } = useSelector((state: State) => state);

  const handleChange = (e: any, newValue: number) => {
    if (newValue === value) {
      return;
    }
    const routes = ['mine', 'others'];
    setValue(newValue);
    history.push(`/posts/${routes[newValue]}`);
  };

  return user && user.id ? (
    <Fragment>
      <div className='posts-list'>
        <Tabs
          value={value}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChange}
          aria-label='Posts navigation'
        >
          <Tab label='Mine' />
          <Tab label='Others' />
        </Tabs>
        <div className='list-container'>
          <Route path='/posts/mine'>
            <MyPosts posts={posts} id={user.id} />
          </Route>
          <Route path='/posts/others'>
            <OthersPosts posts={posts} id={user.id} />
          </Route>
        </div>
      </div>
    </Fragment>
  ) : (
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  );
};
