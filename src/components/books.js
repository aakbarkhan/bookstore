import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Form from './addBooks';
import Book from './book';
import { getBookFromApi } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookList);
  const status = useSelector((state) => state.status);
  // const [localstate, setLocalState] = useState(books);
  console.log(books, 'books');

  useEffect(() => {
    if (status === 'idle') {
      // this will refetch all the books from the API
      dispatch(getBookFromApi());
    } else {
      console.log('no need to fetch');
    }
    // for bigger data, the api is called and not the most efficent way to do it
  }, [status]);
  // if there is change in the status then the useEffect will be called,
  return (
    <div>
      {books?.map((book) => (
        <Book
          // setLocalState={setLocalState}
          id={book.id}
          key={uuidv4()}
          title={book.title}
          category={book.category}
          description={book.description}
          author={book.author}
          image={book.image}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
