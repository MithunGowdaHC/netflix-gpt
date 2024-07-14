// import { BG_URL } from "../utils/constants";
// import GptMovieSuggestions from "./GptMovieSuggestions";
// import GptSearchBar from "./GptSearchBar";

// const GPTSearch = () => {
//   return (
//     <>
//       <div className="fixed -z-10">
//         <img className="h-screen object-cover" src={BG_URL} alt="logo" />
//       </div>
//       <div className="">
//         <GptSearchBar />
//         <GptMovieSuggestions />
//       </div>
//     </>
//   );
// };
// export default GPTSearch;


import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
      <div className=' absolute -z-10'><img src={BG_IMG} alt='logo'></img></div>
      
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
