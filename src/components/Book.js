import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <div className="book" id={id}>
      <div className="bookInfo">
        <h2 className="bookTitle">{title}</h2>
        <span className="bookAuthor">{author}</span>
      </div>
      <div className="bookActions">
        <button type="button">Comments</button>
        <button type="button" onClick={() => { dispatch(removeBookAsync(id)); }}>Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="progressBlock">
        <progress value="32" max="100"> 32% </progress>
        <span>32%</span>
      </div>
      <div className="chapterInfo">
        <div>
          chapter info
        </div>
        <div>
          introduction
        </div>
        <button type="button">
          Update progress
        </button>
      </div>
    </div>
  );
};

Book.defaultProps = {
  id: '0',
  title: 'Title',
  author: 'Author',

};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
