import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Input from "../components/Input";
import Button from "../components/Button";
import app from "../services/firebase/base";

const LoginForm = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    
  
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
          <h5>Email</h5>
            <Input type={"email"} placeholder="Email" id={"email"}></Input>
            <h5>Password</h5>
            <Input type={"password"} placeholder="Password" id={"password"}></Input>
            <Button type="submit" id={"login"} text={"Log In"}/>
        </form>
      </div>
    );
  };
  
  export default withRouter(LoginForm);