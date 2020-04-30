import React from 'react';
import Button from "../components/Button";
import { Link } from 'react-router-dom';
import Main from "../components/Main";

function Index(){
    return(
        
        <Main>
          <Link to="/sign-in"><Button id={"login"} text={"Log In"}/></Link>
          <Link to="/sign-up"><Button id={"signup"} text={"Sign Up"}/></Link>
        </Main>
    
    )
}
export default Index