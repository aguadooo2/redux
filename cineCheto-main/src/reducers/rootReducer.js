import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  // Agrega más reducers aquí si los tienes
});

export default rootReducer;
