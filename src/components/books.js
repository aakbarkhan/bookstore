import { useSelector } from 'react-redux';
import AddBooks from './addBooks';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  // const { item_id, title, category } = books;
  // const id = item_id;
  console.log(books);
  return (
    <div>
      {books.map((task) => {
        // console.log(task.item1[0].title, 'unpack');
        console.log(Object.keys(task));
        const id = Object.keys(task);
        console.log(id.join(''), 'idididi');
        return (
          <Book
            id={id.join('')}
            key={task.item1[0]}
            title={task.item1[0].title}
            category={task.item1[0].category}
          />
        );
      })}
      <AddBooks />
    </div>
  );
};

export default Books;
