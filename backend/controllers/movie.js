const Movie = require('../models/movie');

exports.searchMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.status(200).json({ movies });
    })
    .catch((err) => {
      if (!error.statusCode) {
        err.statusCode = 500;
      }
      next(err);
      console.log(err);
    });
};
