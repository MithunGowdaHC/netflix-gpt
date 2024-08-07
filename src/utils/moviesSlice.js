import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    nowPlayingtrailer:null,
    popularMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addTrailerVideo:(state, action) => {
      state.nowPlayingtrailer = action.payload;

    },
    addPopularMovies:(state, action) => {
      state.popularMovies = action.payload;

    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo , addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;