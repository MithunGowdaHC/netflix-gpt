import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>
      <form className=" absolute w-3/12 my-32  mx-auto right-0 left-0 p-12  bg-black bg-opacity-85 rounded-lg rounded-md text-white">
        <h1 className=" font-bold text-3xl py-5">
          {isSignInform ? " Sign In" : "Sign Up"}
        </h1>

        {!isSignInform && (
          <input
            type="text"
            placeholder="Enter your full name"
            className=" p-4 my-3  bg-white bg-opacity-15 rounded-md w-full"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email address"
          className=" p-4 my-3  bg-white bg-opacity-15 rounded-md w-full"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className=" p-4 bg-white bg-opacity-15 my-3 rounded-md w-full"
        ></input>
        <button className=" p-2 my-2 bg-red-700 w-full rounded-md text-center font-bold ">
          {isSignInform ? " Sign In" : "Sign Up"}
        </button>
        <h3 className=" text-center p-2">OR</h3>
        <button className=" rounded-md p-2 w-full bg-gray-700 opacity-50 text-white font-extrabold">
          Use a sign-in code
        </button>
        <button className=" w-full  text-white p-4">Forgot password?</button>
        <p className=" py-2 font-bold" onClick={toggleSignInForm}>
          {isSignInform
            ? "New to Netflix?Sign up now."
            : "Already Registered?Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
