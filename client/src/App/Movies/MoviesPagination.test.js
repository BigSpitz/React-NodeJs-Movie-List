import React from 'react';
import MoviesPagination from './MoviesPagination';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const handlePageChange = jest.fn();

test('loads and displays MoviesPagination component', () => {
  render(
    <MoviesPagination
      totalItems={50}
      page={1}
      handlePageChange={handlePageChange}
    />
  );
  const { getByText } = screen;
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('5')).toBeInTheDocument();
});

test('loads and displays MoviesPagination component with undefined values', () => {
  render(<MoviesPagination />);
});

test('handlePageChange is called when page changes', () => {
  render(
    <MoviesPagination
      totalItems={50}
      page={1}
      handlePageChange={handlePageChange}
    />
  );
  const { getByText } = screen;
  fireEvent(
    getByText(2),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(handlePageChange).toBeCalledTimes(1);
});
