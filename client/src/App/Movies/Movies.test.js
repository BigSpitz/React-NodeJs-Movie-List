import { render } from '@testing-library/react';
import MoviePage from './index';
import wrapComponent from '../../utils/reduxWrapper';
import axios from 'axios';

jest.mock('axios');
axios.get.mockResolvedValue([]);
axios.post.mockResolvedValue([]);

test('renders MoviePage', () => {
  const moviePage = render(wrapComponent(MoviePage));
  expect(moviePage).toMatchSnapshot();
  expect(axios.get).toBeCalledTimes(1);
  expect(axios.post).toBeCalledTimes(1);
});
