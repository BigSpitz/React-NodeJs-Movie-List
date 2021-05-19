export const parseGenres = (genres) => {
  return genres.map((genre) => parseGenre(genre));
};

const parseGenre = (genre) => {
  let parsedGenre = {
    id: genre.id || '',
    name: genre.attributes.name,
  };
  return parsedGenre;
};
