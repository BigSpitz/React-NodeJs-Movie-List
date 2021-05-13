const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  _id: Number,
  name: String
});

module.exports = mongoose.model('Genre', genreSchema);
