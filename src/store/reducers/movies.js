// store/reducers/movieDetails.js
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {
    setMovies(state, action) {
      // action.payload will contain the movie details
      return action.payload;
    },
    clearMovies(state) {
      return {};
    },
  },
});

export const { setMovies, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
