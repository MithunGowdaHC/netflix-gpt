import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    nowPlayingtrailer:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addTrailerVideo:(state, action) => {
      state.nowPlayingtrailer = action.payload;

    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;