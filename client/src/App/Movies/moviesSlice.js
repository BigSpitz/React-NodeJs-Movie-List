import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchGenres } from './moviesApi';
import { toast } from 'react-toastify';
import { parseGenres } from '../../utils/parseGenres';
import { parseMovies } from '../../utils/parseMovies';

const showError = (message) => {
  toast.error(message);
};

const initialState = {
  genres: [],
  searchResults: {
    movies: [],
    totalItems: 0,
  },
  loading: false,
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
        if (typeof action.payload === 'object' && action.payload !== null) {
          state.searchResults = {
            movies: parseMovies(action.payload.data),
            totalItems: action.payload.meta.totalItems,
          };
        }
      })
      .addCase(getMoviesAsync.rejected, (state, { error }) => {
        const message = `Error in getting movies ${error.message}`;
        state.loading = false;
        showError(message);
      })
      .addCase(getGenresAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'object' && action.payload !== null) {
          state.genres = parseGenres(action.payload.data);
        }
      })
      .addCase(getGenresAsync.rejected, (state, { error }) => {
        const message = `Error in getting genres ${error.message}`;
        showError(message);
        state.loading = false;
      });
  },
});

export const selectMovies = ({ movies }) => movies.searchResults;
export const selectGenres = ({ movies }) => movies.genres;
export const selectLoading = ({ movies }) => movies.loading;

export default moviesSlice.reducer;
