import React from 'react';
import Header from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('loads and displays header', () => {
  render(<Header />);
  expect(screen.getByText('Movie List Exercise')).toBeInTheDocument();
});
