import React from 'react';
import ImageCard from './components/ImageCard';
import { Grid } from '@material-ui/core';

const MovieList = ({ movieList = [] }) => {
  return (
    <Grid container spacing={2}>
      {movieList.map(({ poster_path, title, id, release_date }) => (
        <Grid item sm={4} md={3} lg={2} key={id}>
          <ImageCard imagePath={poster_path}>
            {title} {release_date}
          </ImageCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(MovieList);
