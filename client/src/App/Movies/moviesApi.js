import axios from 'axios';

export function fetchMovies(payload) {
  return axios
    .post('http://localhost:8080/movies/search', { title: payload })
    .then(({ data }) => data.movies);
}
