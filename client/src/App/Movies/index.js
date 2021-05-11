import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getMoviesAsync } from './moviesSlice';

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  return <Typography>MovieList</Typography>;
};

export default Movies;
