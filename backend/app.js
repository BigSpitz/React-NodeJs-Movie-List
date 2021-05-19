import express from 'express';
import mongoose from 'mongoose';

import movieRoutes from './routes/movieRoutes.js';
import genreRoutes from './routes/genreRoutes.js';

const app = express();
const MONGO_URI =
  'mongodb+srv://movieTest:ElQWuKkj7PAKr4cZ@cluster0.66hfz.mongodb.net/MovieDatabase?retryWrites=true&w=majority';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/vnd.api+json');
  next();
});

app.use((req, res, next) => {
  const {
    method,
    headers: { accept },
  } = req;
  if (method === 'OPTIONS') return next();
  const error = new Error(
    JSON.stringify({
      errors: [
        {
          status: 415,
          detail:
            'Unsupported Media Type only application/vnd.api+json is accepted',
        },
      ],
    })
  );
  error.statusCode = 415;
  if (accept !== 'application/vnd.api+json') {
    throw error;
  }
  if (
    method === 'POST' &&
    req.headers['content-type'] !== 'application/vnd.api+json'
  ) {
    throw error;
  }

  next();
});

app.use(express.json({ type: 'application/vnd.api+json' }));

app.use('/movie', movieRoutes);
app.use('/genre', genreRoutes);

app.use((error, req, res, next) => {
  const { statusCode = 500, message, data } = error;
  res.status(statusCode).json(JSON.parse(message));
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

export default app;
