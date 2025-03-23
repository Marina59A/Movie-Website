import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import moviesReducer from './../Slices/movies';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
  },
});

export default store;