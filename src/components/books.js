import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './addBooks';
import Book from './book';
import { getBookFromApi } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  // const [localstate, setLocalState] = useState();
  console.log(books.bookLists, 'books');

  useEffect(() => {
    dispatch(getBookFromApi());
  }, []);
  return (
    <div>
      {books.bookLists?.map((book) => (
        <Book
          // setLocalState={setLocalState}
          id={book.id}
          key={book.id}
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
