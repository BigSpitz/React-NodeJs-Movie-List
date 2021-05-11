import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});
