import express from 'express';

import validator from 'express-validator';

import { searchMovies } from '../controllers/movie.js';

const router = express.Router();
const { body } = validator;

router.post(
  '/search',
  [body('title').trim(), body('genre'), body('page').isInt({ min: 1 })],
  searchMovies
);

export default router;
