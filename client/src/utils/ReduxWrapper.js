import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import moviesReducer from '../App/Movies/moviesSlice';
import * as MoviesApi from '../App/Movies/moviesApi';

export const makeStore = () => {
  return configureStore({ reducer: { movies: moviesReducer } });
};

const wrapComponent = (Component, store, props = {}) => {
  return (
    <Provider store={store || makeStore()}>
      <Component {...props} />{' '}
    </Provider>
  );
};

export default wrapComponent;
