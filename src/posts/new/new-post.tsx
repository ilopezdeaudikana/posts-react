import { Fragment, useState } from 'react';
import {
  FormControl,
  Input,
  Button,
  TextareaAutosize,
  InputLabel,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { CreatePost } from '../../store/actions/actions';
import './add-post.scss';

export const NewPost = (props: { userId: number }) => {
  const { userId } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const handleBodyChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setBody(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(CreatePost({ title, body, userId }));
  };

  const showForm = () => {
    setVisible(!visible);
  };

  return (
    <Fragment>
      <div className='show-form'>
        <Button variant='outlined' color='primary' onClick={() => showForm()}>
          Create new Post
        </Button>
      </div>
      {visible && (
        <form data-testid='form' className='add-post' onSubmit={handleSubmit}>
          <FormControl className='item'>
            <InputLabel htmlFor='title'>Title</InputLabel>
            <Input id='title' onChange={handleTitleChange} />
          </FormControl>
          <FormControl className='item'>
            <TextareaAutosize
              id='body'
              aria-label='Post body textarea'
              placeholder='Post body'
              onChange={handleBodyChange}
              minRows={3}
            />
          </FormControl>
          <Button
            role='button'
            disabled={!title && !body}
            className='save-button'
            variant='outlined'
            color='primary'
            type='submit'
          >
            Save Post
          </Button>
        </form>
      )}
    </Fragment>
  );
};
