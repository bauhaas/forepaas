import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {},
  reducers: {
    setMovieDetails(state, action) {
      return action.payload;
    },
    clearMovieDetails(state) {
      return {};
    },
  },
});

export const { setMovieDetails, clearMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
