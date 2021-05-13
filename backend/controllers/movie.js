const Movie = require('../models/movie');

exports.searchMovies = (req, res, next) => {
  const { title, genre } = req.body;
  const titleRegex = new RegExp(title, 'i');
  let searchTerm = { title: { $regex: titleRegex } };
  if (genre) {
    searchTerm.genre_ids = genre;
  }

  Movie.find(searchTerm)
    .then((movies) => {
      res.status(200).json({ movies });
    })
    .catch((err) => {
      if (!error.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
