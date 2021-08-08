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
    <form onSubmit={handleSubmit} className='login'>
      <FormControl>
        <InputLabel htmlFor='email'>Email address</InputLabel>
        <Input
          id='email'
          aria-describedby='helper-text'
          onChange={handleChange}
        />
        <FormHelperText id='helper-text'>Try Sincere@april.biz.</FormHelperText>
      </FormControl>
      <Button className='submit' variant='outlined' color='primary' type='submit'>
        Log In
      </Button>
    </form>
  );
};
