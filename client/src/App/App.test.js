import App from './index';
import { render } from '@testing-library/react';
import wrapComponent from '../utils/reduxWrapper';
import '@testing-library/jest-dom/extend-expect';

test('loads and displays app', () => {
  const app = render(wrapComponent(App));
  expect(app).toMatchSnapshot();
});
