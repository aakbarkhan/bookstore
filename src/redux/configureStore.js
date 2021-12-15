import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { displayBooks } from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HjsHtEgPSdcmM341lPRI/books';

const fetchBooks = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const getBooks = () => (dispatch) => fetchBooks(url)
  .then((book) => dispatch(displayBooks(book)));

store.dispatch(getBooks());

export default store;
