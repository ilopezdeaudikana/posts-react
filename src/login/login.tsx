import { useState } from 'react';
import {
  FormControl,
  Input,
  Button,
  FormHelperText,
  InputLabel,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FetchUser } from '../store/actions/actions';
import './login.scss';

export const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(FetchUser(email));
  };

  return (
    <form onSubmit={handleSubmit} className='login' data-testid='loginForm'>
      <FormControl>
        <InputLabel htmlFor='email'>Email address</InputLabel>
        <Input
          id='email'
          aria-describedby='helper-text'
          onChange={handleChange}
          required
        />
        <FormHelperText id='helper-text'>Try Sincere@april.biz.</FormHelperText>
      </FormControl>
      <Button
        role='button'
        className='submit'
        variant='outlined'
        color='primary'
        type='submit'
        disabled={!email}
      >
        Log In
      </Button>
    </form>
  );
};
