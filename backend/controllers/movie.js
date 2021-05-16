import Movie from '../models/movie.js';

export const searchMovies = (req, res, next) => {
  const { title, genre, page } = req.body;
  const titleRegex = new RegExp(title, 'i');
  let searchTerm = { title: { $regex: titleRegex } };
  if (genre) {
    searchTerm.genre_ids = genre;
  }
  const currentPage = page || 1;
  const resultsPerPage = 10;
  let totalItems;

  Movie.find(searchTerm)
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Movie.find(searchTerm)
        .skip((currentPage - 1) * resultsPerPage)
        .limit(resultsPerPage);
    })
    .then((movies) => {
      res.status(200).json({
        movies,
        totalItems,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
