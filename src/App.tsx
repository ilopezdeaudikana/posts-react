import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { Posts } from './posts/posts';
import { store } from './store/store';
import styles from './App.module.scss';
import { MyPosts } from './posts/mine/my-posts';
import { OthersPosts } from './posts/others/others-posts';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div data-testid='App' className={styles.container}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/posts' element={<Posts />}>
                <Route path='mine' element={<MyPosts />} />
                <Route path='others' element={<OthersPosts />} /> 
            </Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
