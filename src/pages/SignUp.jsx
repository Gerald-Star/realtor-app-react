import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

export default function SignUp() {
  //create another hook to show the variable password
  const [showPassword, setShowPassword] = useState(false);

  //create a formData using useState and add name, email and password with empty string
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //destructure name, email and password to use the value on the form
  const {name, email, password } = formData;

  //initialize the react router hook use Navigate 
  //and set the navigate to the homepage down the page on catch error 
  const navigate = useNavigate()

  //create onChange function
  function onChange(e) {
    // console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }


  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredential.user;
      console.log(user)
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      // navigate("/");
      navigate("/")
    } catch (error) {
      //console.log(error)
      //instead of console the error we toast the error message
       toast.error("Error in registration");
    }
  }


  return (
    <section>
      <h1 className="text-3xl text-blue-700 text-center mt-6 font-bold
      items-center px-6 py-12 max-w-6xl mx-auto">
      Sign Up</h1>

      <div className="flex justify-center flex-wrap">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

         {/* add the onSubmit for the firebase form here 
        and set the onSubmit function up*/}

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit} >
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
              rounded transition ease-in-out"
            />
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
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700 
                 transition duration-200 ease-in-out ml-1">
                  Sign in
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
              className="w-full bg-blue-700 text-white px-7 py-3 text-sm 
              font-medium uppercase rounded shadow-md hover:bg-blue-800
              transition duration-150 ease-in-out hover:shadow-lg
             active:bg-blue-900"
              type="submit"
            >
              Sign up
            </button>

           
            <div
              className="flex items-center my-4 
              before:border-t  before:flex-1  before:border-gray-300
              after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
