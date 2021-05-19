import { parseMovies } from './movie';
import { testMovies } from '../data/movies';

describe('movies parser works as expected', () => {
  test('parses correctly data', () => {
    expect(parseMovies(testMovies)).toEqual(testParsedMovies);
  });
});

const testParsedMovies = [
  {
    attributes: {
      backdrop_path:
        'https://image.tmdb.org/t/p/w780/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
      genre_ids: [28, 14, 12, 878],
      id: 460465,
      original_language: 'en',
      original_title: 'Mortal Kombat',
      overview:
        "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      popularity: 5419.678,
      poster_path:
        'https://image.tmdb.org/t/p/w780/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
      release_date: '2021-04-07',
      title: 'Mortal Kombat',
      vote_average: 7.7,
      vote_count: 2229,
    },
    id: '',
    type: 'Movies',
  },
  {
    attributes: {
      backdrop_path:
        'https://image.tmdb.org/t/p/w780/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [878, 28, 18],
      id: 399566,
      original_language: 'en',
      original_title: 'Godzilla vs. Kong',
      overview:
        'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      popularity: 3087.183,
      poster_path:
        'https://image.tmdb.org/t/p/w780/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      release_date: '2021-03-24',
      title: 'Godzilla vs. Kong',
      vote_average: 8.1,
      vote_count: 5349,
    },
    id: '',
    type: 'Movies',
  },
];
