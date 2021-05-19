import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import ImageCard from './components/ImageCard';
import Rating from './components/Rating';

const MovieList = ({ movieList = [] }) => {
  return (
    <Grid container spacing={2}>
      {movieList.map(
        ({ poster_path, title, id, release_date, vote_average }) => (
          <Grid item sm={4} md={3} lg={2} key={id}>
            <ImageCard imagePath={poster_path}>
              <Typography>{title}</Typography>
              <Typography variant="subtitle2">({release_date})</Typography>
              <Rating rating={vote_average * 10} />
            </ImageCard>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default MovieList;
