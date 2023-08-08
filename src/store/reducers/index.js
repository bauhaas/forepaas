// store/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import movieDetailsReducer from "./movieDetails";
import moviesReducer from "./movies";

const rootReducer = combineReducers({
  counter: counterReducer,
  movieDetails: movieDetailsReducer,
  movies: moviesReducer,
  // Add other reducers here
});

export default rootReducer;
