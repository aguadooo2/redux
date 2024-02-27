import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/moviesSlice';
import purchasedTicketsReducer from './features/purchasedTicketsSlice';
import favoritesReducer from './features/favoritesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    purchasedTickets: purchasedTicketsReducer,
    favorites: favoritesReducer,
  },
});
