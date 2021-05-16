import Movie from '../models/movie.js';
import validator from 'express-validator';

export const searchMovies = async (req, res, next) => {
  const { errors } = validator.validationResult(req);
  const { title, genre, page } = req.body;
  try {
    if (!!errors.length) {
      const message = errors.map(({ msg }) => msg).join(', ');
      const error = new Error(`Invalid data, ${message}`);
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
      movies,
      totalItems,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
