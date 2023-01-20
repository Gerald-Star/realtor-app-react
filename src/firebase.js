// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB_Q1Heb0FHAhA2x8rIRRNjAzxtmUMZC1o",
    authDomain: "realtor-agency-react-app.firebaseapp.com",
    projectId: "realtor-agency-react-app",
    storageBucket: "realtor-agency-react-app.appspot.com",
    messagingSenderId: "457331559849",
    appId: "1:457331559849:web:6453f570abeb0c06d548b8",
    measurementId: "G-BGN7VWVJYG"
  };


// Initialize Firebase
// initializeApp(firebaseConfig);


initializeApp(firebaseConfig);
export const db = getFirestore()

