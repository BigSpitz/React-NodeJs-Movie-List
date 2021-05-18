import React from 'react';
import Loader from './index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('loader renders', () => {
  const loader = render(<Loader />);
  expect(loader).toMatchSnapshot();
});
