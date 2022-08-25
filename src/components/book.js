import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Book = (props) => {
  const book = props;
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBookFromApi(book.id));
    // dispatch(getBookFromApi());
    // window.location.reload();
  };

  return (
    <div className="book">
      <div className="title">
        <div>
          <img src={book.image} alt={book.title} />
        </div>
        <article>
          <p className="action">{book.category}</p>
          <h2>{book.title}</h2>
          <p className="action">{book.author}</p>
          <p className="action">{book.description}</p>
          <ul className="comment-links">
            <li>Comments</li>
            <li>
              <button className="btn" type="button" onClick={remove}>Remove</button>
            </li>
            <li>Edit</li>
          </ul>
        </article>
      </div>
      <div className="wrapper-round">
        <div className="round" />
        <div className="per">
          <h3 className="percent top">64%</h3>
          <p className="percent">Completed</p>
        </div>
      </div>
      <div className="current">
        <h3 className="cur-head">CURRENT CHAPTER</h3>
        <h3 className="cur-head sec">Chapter 17</h3>
        <input className="progress" type="button" value="UPDATE PROGRESS" />
      </div>
    </div>
  );
};

export default Book;
