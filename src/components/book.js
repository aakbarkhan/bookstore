import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Book = (props) => {
  const book = props;
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="title">
        <article>
          <p className="action">{book.category}</p>
          <h2>{book.title}</h2>
          <p className="action">Suzanne Collins</p>
          <ul className="comment-links">
            <li>Comments</li>
            <li>
              <button className="btn" type="button" onClick={() => dispatch(removeBookFromApi(book.id))}>Remove</button>
            </li>
            <li>Edit</li>
          </ul>
        </article>
      </div>
      <div className="wrapper-round">
        <div className="round" />
        <div>
          <h3>64%</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className="current">
        <h3>Current Chapter</h3>
        <h3><b>Chapter 17</b></h3>
        <input className="progress" type="button" value="Update Progress" />
      </div>
    </div>
  );
};

export default Book;
