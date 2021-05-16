import axios from 'axios';

export const fetchMovies = (payload) => {
  return axios.post('/movie/search', payload).then(({ data }) => data);
};

export const fetchGenres = () => {
  return axios.get('/genre').then(({ data }) => data.genres);
};
