import React from 'react';
import Button from "../components/Button";

import Main from "../components/Main";

function Dash(){
    return(
        
        <Main>
          <Button id={"login"} text={"Log In"}/>
          <Button id={"signup"} text={"Sign Up"}/>
        </Main>
    
    )
}
export default Dash