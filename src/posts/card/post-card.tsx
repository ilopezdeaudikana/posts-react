import { Card, CardContent } from '@material-ui/core';
import { Post } from '../../models/models';
import styles from './post-card.module.scss';

export const PostCard = (props: { post: Post }) => {
  const { title, body, username } = props.post;
  return (
    <Card className={styles.card}>
      <CardContent>
        {username && <p data-testid='username' className={styles.username}>{username}</p>}
        <p className={styles.title}>{title}</p>
        <p className={styles.regular}>{body}</p>
      </CardContent>
    </Card>
  );
};
