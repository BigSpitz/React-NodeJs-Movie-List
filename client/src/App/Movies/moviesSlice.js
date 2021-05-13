import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchGenres } from './moviesApi';

const initialState = {
  genres: [],
  movies: [],
  error: false,
  loading: false
};

export const getMoviesAsync = createAsyncThunk(
  'movies/getMovies',
  async (payload) => {
    const response = await fetchMovies(payload);
    return response;
  }
);

export const getGenresAsync = createAsyncThunk(
  'movies/getGenres',
  async (payload) => {
    const response = await fetchGenres(payload);
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getMoviesAsync.rejected, (state, { error }) => {
        console.log('error', error);
        state.error = error.message;
      })
      .addCase(getGenresAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      });
  }
});

export const selectMovies = ({ movies }) => movies.movies;
export const selectGenres = ({ movies }) => movies.genres;
export const selectLoading = ({ movies }) => movies.loading;

export default moviesSlice.reducer;
