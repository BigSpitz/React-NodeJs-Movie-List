const Movie = require('../models/movie');

exports.searchMovies = (req, res, next) => {
  const { title } = req.body;
  const titleRegex = new RegExp(title, 'i');

  Movie.find({ title: { $regex: titleRegex } })
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
