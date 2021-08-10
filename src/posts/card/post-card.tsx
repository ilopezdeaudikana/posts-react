import { Card, CardContent } from '@material-ui/core';
import { Post } from '../../models/models';
import './card.scss';

export const PostCard = (props: { post: Post }) => {
  const { title, body, username } = props.post;
  return (
    <Card className='card'>
      <CardContent>
        {username && <p data-testid='username' className='username'>{username}</p>}
        <p className='title'>{title}</p>
        <p className='regular'>{body}</p>
      </CardContent>
    </Card>
  );
};
