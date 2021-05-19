import Movie from '../models/movie.js';
import validator from 'express-validator';

export const searchMovies = async (req, res, next) => {
  const { errors } = validator.validationResult(req);
  const { title, genre, page } = req.body;
  try {
    if (!!errors.length) {
      const message = errors.map(({ value, msg, param, location }) => {
        let errorObj = {
          source: { [location]: param },
          title: `Invalid Attribute ${value}`,
          detail: msg,
        };
        return errorObj;
      });
      const error = new Error(JSON.stringify(message));
      error.statusCode = 400;
      throw error;
    }

    const titleRegex = new RegExp(title, 'i');
    let searchTerm = { title: { $regex: titleRegex } };
    if (genre) {
      searchTerm.genre_ids = genre;
    }
    const currentPage = page || 1;
    const resultsPerPage = 10;
    let totalItems;

    const count = await Movie.find(searchTerm).countDocuments();
    totalItems = count;
    const movies = await Movie.find(searchTerm)
      .skip((currentPage - 1) * resultsPerPage)
      .limit(resultsPerPage);
    res.status(200).json({
      meta: {
        totalItems,
      },
      data: parseMovies(movies),
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const parseMovies = (moviesToParse) => {
  return moviesToParse.map((movie) => parseMovie(movie));
};

const parseMovie = (movie) => {
  let parsedMovie = {
    type: 'Movies',
    id: movie._id || '',
  };
  parsedMovie.attributes = movie;
  return parsedMovie;
};
