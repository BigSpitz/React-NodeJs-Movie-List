import express from 'express';

import validator from 'express-validator';

import { searchMovies } from '../controllers/movie.js';

const router = express.Router();
const { body } = validator;

router.post(
  '/search',
  [
    body('title').trim().exists().withMessage('title is mandatory'),
    body('genre').exists().withMessage('genre is mandatory'),
    body('page')
      .exists()
      .withMessage('page is mandatory')
      .isInt({ min: 1 })
      .withMessage('page invalid value, should be int greater than 0'),
  ],
  searchMovies
);

export default router;
