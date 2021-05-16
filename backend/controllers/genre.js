import Genre from '../models/genre.js';

export const getGenres = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    res.status(200).json({ genres });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
