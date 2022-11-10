import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

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
          if (title !== '' && author !== '') {
            const key = uuidv4();
            const book = { key, title, author };
            dispatch(addBook(book));
          }
        }}
      >
        Add Book
      </button>
    </form>
  );
};
export default NewBook;
