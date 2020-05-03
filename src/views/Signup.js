import React, {useState } from 'react';
import Button from "../components/Button";

import Main from "../components/Main";
import Input from "../components/Input";



function Signup(props){
    const [severErrorMessage, setServerErrorMessage] = useState('');
    const {createEmailUser} = props;
    const [error, setError] = useState();
    const handleEvent =  () => {
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
          const user = createEmailUser(email, password);
          console.log(user);
        } catch (error) {
          setError(error.message);
        }
        
      }
    return(
        <Main>
            <h5>Email</h5>
            <Input type={"email"} placeholder="Email" id={"email"}></Input>
            <h5>Password</h5>
            <Input type={"password"} placeholder="Password" id={"password"}></Input>
            <Input type={"password"} placeholder="Confirm Password" id={"passwordConfirm"}></Input>
            <h5>Discord Name</h5>
            <div style={{display:"Flex"}}>
            <Input width={"60%"} type={"text"} placeholder="Name" id={"DCName"}></Input>
            <p>#</p>
            <Input width={"30%"} type={"text"} placeholder="Tag" id={"DCTag"}></Input>
            </div>
            
            <Button id={"signup"} text={"Sign Up"} handleEvent={handleEvent}/>
            
        </Main>

    )
    
}
export default Signup