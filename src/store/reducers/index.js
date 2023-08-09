import { combineReducers } from "@reduxjs/toolkit";
import movieDetailsReducer from "./movieDetails";
import moviesReducer from "./movies";

const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  movies: moviesReducer,
});

export default rootReducer;
