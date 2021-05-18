import React from 'react';
import ImageCard from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders without image path', () => {
  render(<ImageCard />);
  const imageElement = screen.getByAltText('no image available');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.src).toContain('noImage.jpg');
});

test('renders with image path', () => {
  render(<ImageCard imagePath="testImagePath" />);
  const imageElement = screen.getByAltText('poster');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.src).toContain('testImagePath');
});

test('renders with children', () => {
  render(
    <ImageCard>
      <span>Children Test</span>
    </ImageCard>
  );
  expect(screen.getByText('Children Test')).toBeInTheDocument();
});
