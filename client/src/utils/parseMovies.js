export const parseMovies = (movies) => {
  return movies.map((movie) => parseMovie(movie));
};

const parseMovie = (movie) => {
  let parsedMovie = {
    _id: movie.id || '',
    ...movie.attributes,
  };
  return parsedMovie;
};
