const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const url = 'http://localhost:3001/books';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: { ...payload },
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const addBookToApi = (payload) => async (dispatch) => {
  await fetch('http://localhost:3001/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => {
    if (result.status === 201) {
      dispatch(addBook(payload));
    }
  });
};

export const getBookFromApi = () => async (dispatch) => {
  const request = await fetch('http://localhost:3001/books');
  const response = await request.json();
  dispatch(getBook(response));
};

export const removeBookFromApi = (payload) => async (dispatch) => {
  await fetch(`${url}/${payload}`, {
    method: 'DELETE',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch(removeBook(payload));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      // console.log(state[0], 'state fefore remove click');
      return state[0].filter((book) => book.id !== action.payload);
      // return state;
    case FETCH_BOOK:
      // return Object.entries(action.payload).map(([key, value]) => {
      //   const [book] = value;
      //   return {
      //     item_id: key,
      //     ...book,
      //   };
      // });
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
