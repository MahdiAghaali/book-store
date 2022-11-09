import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore(combineReducers(
  bookReducer,
  categoriesReducer,
));

export default store;
