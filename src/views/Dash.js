import React, { useContext, useState } from 'react';
import Button from "../components/Button";

import Main from "../components/Main";
import Input from "../components/Input";
import app from "../services/firebase/base";
import { AuthContext } from "../services/firebase/auth";
import FindMatch from '../components/FindMatch';
import QueueStatus from '../components/QueueStatus';
import NewDuo from "../components/NewDuo";
function Dash(props) {

  const { currentUser } = useContext(AuthContext);
  const [queueState, setQueueState]= useState(null);
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
  <p>Logged in as <b>{currentUser.displayName}</b></p>
      <form onSubmit={changeName}>
        <Input type={"text"} placeholder="Discord name" id={"displayName"}></Input>
        <Button type={"submit"} id={"changeName"} text={"Change name"} />
      </form>
      <QueueStatus queueState={queueState} setQueueState={setQueueState}></QueueStatus>
      <NewDuo queueState={queueState} setQueueState={setQueueState}></NewDuo>
    </Main>

  )
}
export default Dash