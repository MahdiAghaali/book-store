const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const defaultState = [
  { key: '1', title: 'myBook', author: 'me' },
  { key: '2', title: 'yourBook', author: 'you' },
  { key: '3', title: 'ourBook', author: 'us' },
];

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.key.toString() !== action.index.toString());
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});
