const Genre = require('../models/genre');

exports.getGenres = (req, res, next) => {
  Genre.find()
    .then((genres) => {
      res.status(200).json({ genres });
    })
    .catch((err) => {
      if (!error.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
