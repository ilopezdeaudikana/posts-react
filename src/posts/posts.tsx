import { Fragment, useState, useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';

import { FetchPosts } from '../store/actions/actions';
import { State } from '../models/models';
import styles from './posts.module.scss';

export const Posts = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(FetchPosts());
  }, [dispatch]);

  const { posts, user } = useSelector((state: State) => state);

  const handleChange = (e: any, newValue: number) => {
    if (newValue === value) {
      return;
    }
    const routes = ['mine', 'others'];
    setValue(newValue);
    navigate(`/posts/${routes[newValue]}`);
  };

  return user && user.item.id ? (
    <Fragment>
      <div className={styles.postsList}>
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
        <div className={styles.listContainer}>
          <Outlet context={[posts, user.item.id]}/>
        </div>
      </div>
    </Fragment>
  ) : (
    <Navigate
      to={{
        pathname: '/',
      }}
    />
  );
};
