import React, { useContext } from 'react';
import Button from "../components/Button";

import Main from "../components/Main";
import Input from "../components/Input";
import app from "../services/firebase/base";
import { AuthContext } from "../services/firebase/auth";
function Dash(props) {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const changeName = (e) => {
    e.preventDefault();
    const {displayName} = e.target.elements;
    console.log(displayName.value);
    currentUser.updateProfile({
      displayName: displayName.value
    }).then(function() {
      // Update successful.
      console.log("success")
    }).catch(function(error) {
      console.log("error")
      // An error happened.
    });
  }
  const signOut = () => {
    try {
      app
        .auth()
        .signOut();
    } catch (error) {
      alert(error);
    }
  }
  return (

    <Main>
      <Button action={signOut} text={"Sign Out"}></Button>
      <form onSubmit={changeName}>
        <Input type={"text"} placeholder="Display name" id={"displayName"}></Input>
        <Button type={"submit"} id={"changeName"} text={"Change name"} />
      </form>

    </Main>

  )
}
export default Dash