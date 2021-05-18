import React from 'react';
import MoviesList from './MoviesList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const movieList = [
  {
    poster_path: 'testUrl',
    title: 'test1',
    id: 1,
    release_date: '2021-1-1',
    vote_average: 7,
  },
];

test('loads and displays moviesList component', () => {
  render(<MoviesList movieList={movieList} />);
  const { getByText } = screen;
  expect(getByText('test1')).toBeInTheDocument();
  expect(getByText('(2021-1-1)')).toBeInTheDocument();
  expect(getByText('70%')).toBeInTheDocument();
});

test('loads and displays without list', () => {
  render(<MoviesList />);
});
