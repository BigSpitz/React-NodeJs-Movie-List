import { parseGenres } from './genre';
import { testGenres } from '../data/genres';

const testParsedGenres = [
  { attributes: { name: 'Action' }, id: '', type: 'genres' },
  { attributes: { name: 'Adventure' }, id: '', type: 'genres' },
];

describe('genres parser works as expected', () => {
  test('parsed correctly data', () => {
    expect(parseGenres(testGenres)).toEqual(testParsedGenres);
  });
});
