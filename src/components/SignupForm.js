import React,{useCallback } from "react";
import { withRouter } from "react-router";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import app from "../services/firebase/base";

// function SignupForm(props){
//     const handleSubmit = useCallback(async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//           await app
//             .auth()
//             .createUserWithEmailAndPassword(email.value, password.value);
//           history.push("/");
//         } catch (error) {
//           alert(error);
//         }
//       }, [history]);

//     return(
//     <form onSubmit={handleSubmit}>
        // <h5>Email</h5>
        //     <Input type={"email"} placeholder="Email" id={"email"}></Input>
        //     <h5>Password</h5>
        //     <Input type={"password"} placeholder="Password" id={"password"}></Input>
        //     <Button type="submit" id={"signUp"} text={"Sign Up"}/>
//     </form>
//     )};
// export default SignupForm
const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }, [history]);
  
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSignUp}>
          <h5>Email</h5>
            <Input type={"email"} placeholder="Email" id={"email"}></Input>
            <h5>Password</h5>
            <Input type={"password"} placeholder="Password" id={"password"}></Input>
            <Button type="submit" id={"signUp"} text={"Sign Up"}/>
        </form>
      </div>
    );
  };
  
  export default withRouter(SignUp);