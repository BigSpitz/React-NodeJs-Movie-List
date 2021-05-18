import React from 'react';
import MoviesForm from './MoviesForm';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { selectMaterialUiSelectOption } from '../../utils/selectAction';

const genres = [{ _id: 12, name: 'testGenre' }];
const setSearchFields = jest.fn();

test('loads and displays MoviesForm component', () => {
  render(<MoviesForm setSearchFields={jest.fn()} />);
  const { getByText, getByLabelText } = screen;
  expect(getByLabelText('Movie Title')).toBeInTheDocument();
  expect(getByLabelText('Genre')).toBeInTheDocument();
  expect(getByText('Search')).toBeInTheDocument();
});

test('on change handlers fire', async () => {
  render(<MoviesForm setSearchFields={setSearchFields} genres={genres} />);
  const { getByLabelText, getByDisplayValue } = screen;
  selectMaterialUiSelectOption(getByLabelText('Genre'), 'testGenre');
  fireEvent.change(getByLabelText('Movie Title'), {
    target: { value: 'testTitle' },
  });
  expect(getByDisplayValue('testTitle')).toBeInTheDocument();
  expect(getByDisplayValue(12)).toBeInTheDocument();
});

test('submits form when search button is pressed', async () => {
  render(<MoviesForm setSearchFields={setSearchFields} genres={genres} />);
  const { getByText, getByLabelText } = screen;
  fireEvent(
    getByText('Search'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  selectMaterialUiSelectOption(getByLabelText('Genre'), 'testGenre');
  expect(setSearchFields).toBeCalledTimes(1);
  expect(setSearchFields).toBeCalledWith({
    genre: '',
    page: 1,
    title: '',
  });
});
