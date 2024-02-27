import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  favorites: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(movieId => movieId !== action.payload);
    },
  },
});

export const { setMovies, addFavorite, removeFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
