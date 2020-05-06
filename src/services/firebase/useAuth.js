import { useState} from "react";


function useAuth(fbAuth) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const createEmailUser = (email, password) => fbAuth.createUserWithEmailAndPassword(email, password);
   const signInEmailUser  = (email, password) => fbAuth.signInWithEmailAndPassword(email, password);
   const signOut = fbAuth.signOut();

   fbAuth.onAuthStateChanged(function(user) {
      if (user) {
         setIsAuthenticated(true);
         console.log(isAuthenticated)
         return
      } else {
         setIsAuthenticated(false);
         console.log(isAuthenticated)
         return
      }

    });

   return {isAuthenticated, createEmailUser, signInEmailUser};
   
}

export default useAuth