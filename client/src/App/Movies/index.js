import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MoviesList from './MoviesList';
import MoviesForm from './MoviesForm';
import Loader from './components/Loader';
import {
  getMoviesAsync,
  selectMovies,
  selectLoading,
  getGenresAsync
} from './moviesSlice';

const initialFormFields = {
  title: '',
  genre: ''
};

const Movies = () => {
  const [searchFields, setSearchFields] = useState(initialFormFields);

  const dispatch = useDispatch();
  const moviesArray = useSelector(selectMovies);
  const loading = useSelector(selectLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMoviesAsync(searchFields));
  };

  useEffect(() => {
    dispatch(getMoviesAsync());
    dispatch(getGenresAsync());
  }, [dispatch]);

  return (
    <>
      <MoviesForm
        handleSubmit={handleSubmit}
        searchFields={searchFields}
        setSearchFields={setSearchFields}
      />
      {loading ? <Loader /> : <MoviesList movieList={moviesArray} />}
    </>
  );
};

export default Movies;
