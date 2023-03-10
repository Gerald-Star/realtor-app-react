import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
 

  //create a email using useState hook and make it an empty string as an initial value
  const [email, setEmail] = useState("");

  //we don't need destructure email 

  //create onChange function
  function onChange(e) {
    // console.log(e.target.value);
    setEmail( e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    //create a forgot password from firebase password reset
    //create a new auth with sendPasswordResetEmail format
     //create onsubmit and set the function to be promise.
    //set the function on the top

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email sent successfully!")
      
    } catch (error) {
      toast.error("Password reset failed!")
      
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12
       max-w-6xl mx-auto">

        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">

          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
             rounded transition ease-in-out"
            />


            <div className="flex justify-between whitespace-nowrap text-sm 
              sm:text-lg">
              <p className="mb-6">
                {" "}
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-700 hover:text-red-800 
                  transition duration-300 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>

              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 
                  transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            <button
              className="w-full bg-blue-700 text-white px-7 py-3 text-sm font-medium
              uppercase rounded shadow-md hover:bg-blue-700
              transition duration-150 ease-in-out hover:shadow-lg
             active:bg-blue-800"
              type="submit"
            >
              Reset password
            </button>

            <div
              className="flex items-center my-4 
              before:border-t  before:flex-1  before:border-gray-300
              after:border-t after:flex-1 after:border-gray-300"
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

