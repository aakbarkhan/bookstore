import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

// const reducer = combineReducers({
//   booksReducer,
//   // additional reducers could be added here
// });

const store = createStore(
  booksReducer,
  applyMiddleware(logger, thunk),
);

export default store;
