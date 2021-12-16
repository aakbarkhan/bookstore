const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DPo4nlYS7MkRGLDUZ9ls/books/';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: { ...payload },
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// get book from backend
export const getBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

// Add book to API
export const addBookToApi = (payload) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DPo4nlYS7MkRGLDUZ9ls/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => {
    if (result.status === 201) {
      dispatch(addBook(payload));
    }
  });
};

// Remove book from API
export const removeBookFromApi = (payload) => async (dispatch) => {
  await fetch(`${url}${payload}`, {
    method: 'DELETE',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch(removeBook(payload));
};

// get book from API
export const getBookFromApi = () => async (dispatch) => {
  const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DPo4nlYS7MkRGLDUZ9ls/books');
  const response = await request.json();
  dispatch(getBook(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOK:
      return Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
        };
      });
    default:
      return state;
  }
};

export default reducer;
