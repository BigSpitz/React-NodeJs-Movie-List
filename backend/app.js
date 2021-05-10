const express = require('express');
const mongoose = require('mongoose');

const app = express();

const MONGO_URI =
  'mongodb+srv://movieTest:RNS36khMyZEJfP8j@cluster0.66hfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('result', result);
    app.listen(8080);
  })
  .catch((err) => console.log(err));
