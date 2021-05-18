import React from 'react';
import Rating from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Rating renders', () => {
  const rating = render(<Rating />);
  expect(rating).toMatchSnapshot();
});

test('Rating with props shows percentage', () => {
  render(<Rating rating={100} />);
  expect(screen.getByText('100%')).toBeInTheDocument();
});

test('Rating with props float rounds number', () => {
  render(<Rating rating={79.8} />);
  expect(screen.getByText('80%')).toBeInTheDocument();
});
