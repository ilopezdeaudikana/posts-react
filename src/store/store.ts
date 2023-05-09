import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import postReducer from './slices/posts.slice'
import userReducer from './slices/user.slice'
import usersReducer from './slices/users.slice'
import userSaga from './sagas/user.saga'
import postsSaga from './sagas/posts.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false, serializableCheck: false }).prepend(sagaMiddleware)
  }
})

sagaMiddleware.run(postsSaga)
sagaMiddleware.run(userSaga)

