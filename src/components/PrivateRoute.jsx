import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from  "./Spinner"


export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    // return  <h3>Loading.....</h3> change this loading to spinner component
    //import spinner
    return <Spinner />

  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}








//add private route to component and render it with navigation component in  App.js
//setting the private route to false will not allow anybody to get to the profile page
// To set the private route for better login, create a new custom hooks-/ create hooks component
// create the hook useAuthStatus
//   const loggedIn = false; import the login and checkingStatus from the useAuthStatus