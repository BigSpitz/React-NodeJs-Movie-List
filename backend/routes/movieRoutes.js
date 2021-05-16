const express = require('express');
const {body} = require('express-validator')

const movieController = require('../controllers/movie');

const router = express.Router();

router.post('/search', [body('title').trim(), body('genre'), body('page').isInt({min: 1})], movieController.searchMovies);

module.exports = router;
