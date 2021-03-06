import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const movieSchema = new Schema({
  backdrop_path: String,
  genre_ids: Array,
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  vote_average: Number,
  vote_count: Number,
});

export default model('Movie', movieSchema);
