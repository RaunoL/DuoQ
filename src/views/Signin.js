import React from 'react';
import Button from "../components/Button";

import Main from "../components/Main";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

function Signin(){
    return(
        <Main>
            <h5>Email</h5>
            <Input type={"email"} placeholder="Email" id={"email"}></Input>
            <h5>Password</h5>
            <Input type={"password"} placeholder="Password" id={"password"}></Input>
            <div style={{display: "flex"}}>
                <Checkbox></Checkbox><p>Remember me</p>
            </div>
            <Button id={"login"} text={"Log In"}/>
            
        </Main>

    )
}
export default Signin