import React, {useState, useContext} from 'react';
import Button from "../components/Button";
import { Link, Redirect } from 'react-router-dom';
import Main from "../components/Main";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import {AuthContext} from "../services/firebase/auth";

function Index(){
  const [showComponent, setShowComponent] = useState(null);
  let form;
  const showLogin = ()=>{
    setShowComponent("LoginForm");
  }
  const showSignup = ()=>{
    setShowComponent("SignupForm");
  }
  if (showComponent=="SignupForm"){
    form =  <SignupForm></SignupForm>
  }
  if (showComponent=="LoginForm"){
    form = <LoginForm></LoginForm>
  }
  const { currentUser } = useContext(AuthContext);

    if (currentUser) {
      
    
      return <Redirect to="/dash" />;
      
    }
    return(
        
        <Main>
          <Button action={showLogin} id={"login"} text={"Log In"}/>
          <Button action={showSignup} id={"signup"} text={"Sign Up"}/>
          {form}
          
        </Main>
    
    )
}
export default Index