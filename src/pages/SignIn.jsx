import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";


export default function SignIn() {
  //create another hook to show the variable password
  const [showPassword, setShowPassword] = useState(false);

  //create a formData using useState
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //destructure email and password to use the value on the form
  const { email, password } = formData;

  const navigate = useNavigate();

  //create onChange function
  function onChange(e) {
    // console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  //create the onSubmit function using promise async and await.
  //create the auth function using the getAuth 

  async function onSubmit(e) {
    e.preventDefault();
    try {


    const auth = await getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    //create the navigate to the home page and set the useNavigate hook on top.
      if (userCredential.user) {
        navigate("/")
      }
  
  } catch (error) {
      toast.error("Error submitting form")
      
    }
  }



  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold
      items-center px-6 py-12 max-w-6xl mx-auto">
      Sign In</h1>

      <div className="flex justify-center flex-wrap">
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

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
            rounded transition ease-in-out"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                {" "}
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 
                  transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>

              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 
                  transition duration-200 ease-in-out"
                >
                  Forgot password?
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
              Sign in
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
