import Genre from '../models/genre.js';

export const getGenres = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    res.status(200).json({
      links: {
        self: 'http://localhost:3000/genre',
      },
      data: parseGenres(genres),
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const parseGenres = (genresToParse) => {
  return genresToParse.map((genre) => parseGenre(genre));
};

const parseGenre = ({ _id, name }) => {
  const parsedGenre = {
    type: 'genres',
    id: _id || '',
    attributes: {
      name: name || '',
    },
  };
  return parsedGenre;
};
