import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import { Login } from './login/login';
import { Posts } from './posts/posts';
import { store } from './store/store';
import './App.scss';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div data-testid='App' className='container'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/posts' component={Posts}></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
export default App;
