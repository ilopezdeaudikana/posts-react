import { PostCard } from './post-card';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('PostCard component', () => {
  it('should display all the props', async () => {
    const { getByText } = render(
      <PostCard
        post={{ userId: 1, title: 'title', body: 'body', username: 'username' }}
      />
    );
    const title = getByText('title');
    const body = getByText('body');
    const username = getByText('username');
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });

  it('should not display any username', async () => {
    const {queryByTestId} = render(
      <PostCard
        post={{ userId: 1, title: 'title', body: 'body', username: '' }}
      />
    );
    // const username = getByTestId('username');
    expect(queryByTestId('username')).toBeNull();
  });
});
