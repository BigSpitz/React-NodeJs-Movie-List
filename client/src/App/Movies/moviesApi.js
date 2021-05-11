import axios from 'axios';

export function fetchMovies() {
  return axios
    .post('http://localhost:8080/movies/search')
    .then(({ data }) => data.movies);
}
