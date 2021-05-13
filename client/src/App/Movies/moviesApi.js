import axios from 'axios';

export function fetchMovies(payload) {
  return axios
    .post('http://localhost:8080/movie/search', payload)
    .then(({ data }) => data.movies);
}

export function fetchGenres() {
  return axios
    .get('http://localhost:8080/genre')
    .then(({ data }) => data.genres);
}
