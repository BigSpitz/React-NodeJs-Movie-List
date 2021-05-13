const express = require('express');
const mongoose = require('mongoose');

const movieRoutes = require('./routes/movieRoutes');
const genreRoutes = require('./routes/genreRoutes');

const app = express();
const MONGO_URI =
  'mongodb+srv://movieTest:ElQWuKkj7PAKr4cZ@cluster0.66hfz.mongodb.net/MovieDatabase?retryWrites=true&w=majority';

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/movie', movieRoutes);
app.use('/genre', genreRoutes);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
