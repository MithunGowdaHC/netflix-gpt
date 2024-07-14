

import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    movies.nowPlayingmovies &&
    <div className=' bg-black'>
      <div className=' -mt-38    relative z-10'>
      <MovieList title = {"Now Playing"} movies={movies.nowPlayingmovies}/>
      <MovieList title = {"Popular"} movies={movies.popularMovies}/>

     
      <MovieList title = {"Trending"} movies={movies.nowPlayingmovies}/>
      <MovieList title = {"Upcoming Movies"} movies={movies.nowPlayingmovies}/>
      <MovieList title = {"Horror"} movies={movies.nowPlayingmovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer