import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MoviesList from './MoviesList';
import MoviesForm from './MoviesForm';
import MoviesPagination from './MoviesPagination';
import Loader from './components/Loader';
import {
  getMoviesAsync,
  selectMovies,
  selectLoading,
  getGenresAsync,
  selectGenres,
} from './moviesSlice';

const initialFormFields = {
  title: '',
  genre: '',
  page: 1,
};

const Movies = () => {
  const dispatch = useDispatch();
  const [searchFields, setSearchFields] = useState(initialFormFields);
  const { movies, totalItems } = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const genres = useSelector(selectGenres);

  const handlePageChange = (e, page) => {
    setSearchFields({ ...searchFields, page });
  };

  useEffect(() => {
    dispatch(getMoviesAsync(searchFields));
  }, [searchFields, dispatch]);

  useEffect(() => {
    dispatch(getGenresAsync());
  }, [dispatch]);

  return (
    <>
      <MoviesForm setSearchFields={setSearchFields} genres={genres} />
      <MoviesPagination
        totalItems={totalItems}
        handlePageChange={handlePageChange}
        page={searchFields.page}
      />
      {loading ? <Loader /> : <MoviesList movieList={movies} />}
    </>
  );
};

export default Movies;
