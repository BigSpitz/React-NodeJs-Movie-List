const express = require('express');

const movieController = require('../controllers/movie');

const router = express.Router();

router.post('/movies/search', movieController.searchMovies);

module.exports = router;
