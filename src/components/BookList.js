import React from 'react';
import Book from './Book';

class BookList extends React.PureComponent {
  render() {
    const bookArray = [
      { key: 1, title: 'myBook', author: 'me' },
      { key: 2, title: 'yourBook', author: 'you' },
      { key: 3, title: 'ourBook', author: 'us' },
    ];
    return (
      <ul>
        {bookArray.map((book) => <Book key={book.key} title={book.title} author={book.author} />)}
      </ul>
    );
  }
}

export default BookList;
