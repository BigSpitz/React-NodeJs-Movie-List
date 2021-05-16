import express from 'express';
import mongoose from 'mongoose';

import movieRoutes from './routes/movieRoutes.js';
import genreRoutes from './routes/genreRoutes.js';

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

app.use((error, req, res, next) => {
  const { statusCode = 500, message, data } = error;
  res.status(statusCode).json({ message, data });
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

export default app;
