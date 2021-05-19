import axios from 'axios';

export const fetchMovies = (payload) => {
  return axios
    .post('/movie/search', payload, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      },
    })
    .then(({ data }) => data);
};

export const fetchGenres = () => {
  return axios
    .get('/genre', {
      headers: {
        Accept: 'application/vnd.api+json',
      },
    })
    .then(({ data }) => data);
};
