import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MoviesList from './MoviesList';
import MoviesForm from './MoviesForm';
import Loader from './components/Loader';
import { getMoviesAsync, selectMovies, selectLoading } from './moviesSlice';

const Movies = () => {
  const dispatch = useDispatch();
  const moviesArray = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e, value) => {
    e.preventDefault();
    dispatch(getMoviesAsync(searchQuery));
  };

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  return (
    <>
      <MoviesForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      {loading ? <Loader /> : <MoviesList movieList={moviesArray} />}
    </>
  );
};

export default Movies;
