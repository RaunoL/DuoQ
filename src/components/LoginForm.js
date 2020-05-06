import React from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";


function LoginForm(props){
    const {signInEmailUser} = props;
    const handleSubmit =  async event=>{
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            const user = await signInEmailUser(email.value, password.value);
        }
        catch(e){
            console.log(e);
        }
    }

    return(
    <form onSubmit={handleSubmit}>
        <h5>Email</h5>
            <Input type={"email"} placeholder="Email" id={"email"}></Input>
            <h5>Password</h5>
            <Input type={"password"} placeholder="Password" id={"password"}></Input>
            <div style={{display: "flex"}}>
                <Checkbox></Checkbox><p>Remember me</p>
            </div>
            <Button type="submit" id={"login"} text={"Log In"}/>
    </form>
    )};
export default LoginForm