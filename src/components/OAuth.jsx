import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'
import {toast} from "react-toastify"
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


//Step 1- create a function onGoogleClick
//add the type of button to avoid error to set that it is a button

//Step 2- To handle the sign-in flow with the Firebase JavaScript SDK, follow these steps:
//Create an instance of the Google provider object
//import the GoogleAuthProvider, getAuth, a from SignInWithPopUp from Firebase
//import and set the react toaster
//create the provider from firebase
//use the signUp pop uo to sign the person returns a promise async -await

//" Step 3- Add the user to the firebase database"
// Add the user and servertimestamp to the firebase database
//import db, getDoc, setDoc and servertimestamp

//Step 4. to navigate to another page, import and set the useNavigate hook
// initialize it at the top of the page
//set the navigate to the next page (Home page)



export default function OAuth() {
  const navigate = useNavigate();

  async function onGoogleClick (){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)

       // The signed-in user info.
      const user = result.user;
      console.log(user)

      //create the ref and check for the user using the docRef and add to the database
      //return a promise that will be resolved
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef);

      //check if the doc exists. If exists add the doc to the database
      //import the doc, 

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }

      //the navigate hook is called when the user is navigating to the new page
      navigate("/");

      // Handle Errors here.
    } catch (error) {
      toast.error("Could not authorize with Google")
      console.log(error)
      
    }}

  return (
    <button type="button" onClick={onGoogleClick}
    
    className='w-full flex items-center justify-center
    bg-red-700 text-white px-7 py-3 uppercase
    text-sm font-medium hover:bg-red-800
    active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg
    transition-150 ease-in-out rounded'>

    <FcGoogle 
    className='text-2xl bg-white rounded-full mr-2'
    />    
    Continue with Google</button>
  )
}