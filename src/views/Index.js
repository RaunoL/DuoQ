import React from 'react';
import Button from "../components/Button";
import { Link } from 'react-router-dom';
import Main from "../components/Main";
import LoginForm from "../components/LoginForm";

function Index(props){
  const {signInEmailUser} = props;
    return(
        
        <Main>
          <Link to="/sign-in"><Button id={"login"} text={"Log In"}/></Link>
          <Link to="/sign-up"><Button id={"signup"} text={"Sign Up"}/></Link>
          <LoginForm signInEmailUser={signInEmailUser}></LoginForm>
        </Main>
    
    )
}
export default Index