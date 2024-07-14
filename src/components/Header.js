import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())

  } 

  const handleLanguageChange = (e) => {
   dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className=" absolute z-10 w-screen bg-gradient-to-b from-black p-5  box-border flex justify-between ">
      <img className=" w-40" src={LOGO} alt="no"></img>

      {user && (
        <div className=" flex p-5 ">
         {showGptSearch && <select onChange={handleLanguageChange} className = "p-2  m-2 transp bg-gray-900 text-white">
            {SUPPORTED_LANGUAGES.map((lan)=> (<option key={lan.identifier} className=" cursor-pointer" value = {lan.identifier}>{lan.name}</option>))}
          </select>}
          <div>
          <button onClick={handleGptSearchClick} className=" px-2 py-2  text-white bg-purple-600 my-2 mx-4 rounded-lg ">{
            showGptSearch? "Home Page" : "GPT Search"}</button>
          </div>
          <img src={AVATAR} className="w-12 h-12" alt="no"></img>
          <button onClick={handleSignOut} className=" font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
