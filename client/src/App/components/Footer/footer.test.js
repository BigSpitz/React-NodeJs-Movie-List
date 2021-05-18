import React from 'react';
import Footer from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('loads and displays footer', () => {
  render(<Footer />);
  expect(screen.getByText('Copyright 2021')).toBeInTheDocument();
});
