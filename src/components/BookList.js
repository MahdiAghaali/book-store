import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBookAsync } from '../redux/books/books';

const BookList = () => {
  const bookArray = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookAsync());
  }, []);

  return (
    <ul>
      {bookArray.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
