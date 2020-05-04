import { useState } from "react";


function useAuth(fbAuth) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const createEmailUser = (email, password) => fbAuth.createUserWithEmailAndPassword(email, password);
   
   const signInEmailUser = (email, password) => fbAuth.signInWithEmailAndPassword(email, password);
   console.log(isAuthenticated);
   // const signOut = () => fbAuth.signOut();
   fbAuth.onAuthStateChanged(user => {

      if (user) {
         console.log(isAuthenticated);
         setIsAuthenticated(true);
         return;
      } 
      // else{
      //    setIsAuthenticated(false)
      // return;
      // }
      
   });
   return { isAuthenticated, createEmailUser, signInEmailUser };

}

export default useAuth