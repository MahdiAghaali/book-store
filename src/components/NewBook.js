import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/books';

const NewBook = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <h2>Add new Book</h2>
      <span>title:</span>
      <input id="bookTitleInput" required />
      <span>author:</span>
      <input id="bookAuthorInput" required />
      <button
        type="button"
        onClick={() => {
          const title = document.getElementById('bookTitleInput').value;
          const author = document.getElementById('bookAuthorInput').value;
          const category = 'PlaceHolder';

          if (title !== '' && author !== '') {
            const key = uuidv4();
            const book = {
              item_id: key, title, author, category,
            };
            dispatch(addBookAsync(book));
          }
        }}
      >
        Add Book
      </button>
    </form>
  );
};
export default NewBook;
