import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";


const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const [errorMessage, seterrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    if (!isSignInform) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              
            })
            .catch((error) => {
              seterrorMessage(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
         

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        

        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };
  return (
    <div>
      <Header />
      <div className=" absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="no"
        ></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" absolute w-3/12 my-32  mx-auto right-0 left-0 p-12  bg-black bg-opacity-85 rounded-lg  text-white"
      >
        <h1 className=" font-bold text-3xl py-5">
          {isSignInform ? " Sign In" : "Sign Up"}
        </h1>

        {!isSignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your full name"
            className=" p-4 my-3  bg-white bg-opacity-15 rounded-md w-full"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className=" p-4 my-3  bg-white bg-opacity-15 rounded-md w-full"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 bg-white bg-opacity-15 my-3 rounded-md w-full"
        ></input>
        <p className=" text-red-700 font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className=" p-2 my-2 bg-red-700 w-full rounded-md text-center font-bold "
        >
          {isSignInform ? " Sign In" : "Sign Up"}
        </button>
        <h3 className=" text-center p-2">OR</h3>
        <button className=" rounded-md p-2 w-full bg-gray-700 opacity-50 text-white font-extrabold">
          Use a sign-in code
        </button>
        <button className=" w-full  text-white p-4">Forgot password?</button>
        <p
          className=" py-2 font-bold cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInform
            ? "New to Netflix?Sign up now."
            : "Already Registered?Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
