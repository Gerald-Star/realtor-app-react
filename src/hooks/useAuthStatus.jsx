import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { loggedIn, checkingStatus };
}

//this calls the useEffect one time
//for return, return the logged in user and check in status of the user. If the user is not logged in or not authenticated.