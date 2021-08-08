import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/root.reducer';
import userSaga from './sagas/user.saga';
import postsSaga from './sagas/posts.saga';

export const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const configureStore = (() => {
  return createStore(
    rootReducer,
    enhancers
  );

});


export const store = configureStore();
sagaMiddleware.run(userSaga);
sagaMiddleware.run(postsSaga);
