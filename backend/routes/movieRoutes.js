import express from 'express';

import validator from 'express-validator';

import { searchMovies } from '../controllers/movie.js';

const router = express.Router();
const { body } = validator;

router.post(
  '/search',
  [
    body('title')
      .exists({ checkNull: true })
      .withMessage('title is mandatory')
      .trim(),
    body('genre').exists({ checkNull: true }).withMessage('genre is mandatory'),
    body('page')
      .exists()
      .withMessage('page is mandatory')
      .isInt({ min: 1 })
      .withMessage('page invalid value, should be int greater than 0'),
  ],
  searchMovies
);

export default router;
