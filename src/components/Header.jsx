import { useEffect, useState } from 'react'
// import {Navigate, useLocation} from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged} from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("sign in")
  const location = useLocation();
  const auth = getAuth();
  const navigate = useNavigate();

  
  
  useEffect (() => {
    onAuthStateChanged(auth, (user)=> {
      if(user) {
        setPageState("Profile");
      }else  {
        setPageState("sign in");
      }

    });
  }, [auth])


  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true
    }
  }

  


  
  //for authentication initialize the auth from getAuth
  // use the useEffect function to check the changes of auth to call a function
  //each time the auth changes we need to call the auth dependencies
  
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>

        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              border-b-[3px] border-b-transparent 
              ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              border-b-[3px] border-b-transparent 
              ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}>
              {/*Make the sign-in Dynamic by creating a hook for the sign-in at the top.
               The onclick brings the user to the sign-in screen. 
               make it dynamic so that when the user is authenticated. 
               it goes to the profile page.
               Change the onclick old position from sign-in to profile
              
              */}

             { /*Change the Sign in here to pageState to make it dynamic*/}
             {pageState}
            </li>
            
          </ul>
        </div>
      </header>
    </div>
  );
}
