import Genre from '../models/genre.js';

export const getGenres = (req, res, next) => {
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
