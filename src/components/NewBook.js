import React from 'react';

class NewBook extends React.PureComponent {
  render() {
    return (
      <form>
        <h2>Add new Book</h2>
        <span>title:</span>
        <input id="bookTitleInput" />
        <span>author:</span>
        <input id="bookAuthorInput" />
        <button type="button">Add Book</button>
      </form>
    );
  }
}

export default NewBook;
