import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const genreSchema = new Schema({
  _id: Number,
  name: String,
});

export default model('Genre', genreSchema);
