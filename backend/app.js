const express = require('express');
const mongoose = require('mongoose');

const movieRoutes = require('./routes/moviesRoutes');

const app = express();
const MONGO_URI =
  'mongodb+srv://movieTest:RNS36khMyZEJfP8j@cluster0.66hfz.mongodb.net/MovieDatabase?retryWrites=true&w=majority';

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

app.use('/', movieRoutes);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
