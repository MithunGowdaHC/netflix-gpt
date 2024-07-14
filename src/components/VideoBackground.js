import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const nowPlayingtrailer = useSelector(
    (store) => store.movies?.nowPlayingtrailer
  );

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="  w-screen aspect-video object-cover"
        src={
          "https://www.youtube.com/embed/" +
          nowPlayingtrailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
