import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookArray = useSelector((state) => state.bookReducer);

  return (
    <ul>
      {bookArray.map((book) => (
        <Book
          key={book.key}
          id={book.key}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
