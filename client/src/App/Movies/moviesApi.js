import axios from 'axios';
const HEROKU_URL = 'https://movie-list-api-nikolaos-xeras.herokuapp.com';

const apiRoute = process.env.NODE_ENV === 'development' ? '' : HEROKU_URL;

export const fetchMovies = (payload) => {
  return axios
    .post(`${apiRoute}/movie/search`, payload, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      },
    })
    .then(({ data }) => data);
};

export const fetchGenres = () => {
  return axios
    .get(`${apiRoute}/genre`, {
      headers: {
        Accept: 'application/vnd.api+json',
      },
    })
    .then(({ data }) => data);
};
