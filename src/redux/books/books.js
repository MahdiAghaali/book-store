const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.book];
    case REMOVE_BOOK: return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
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
