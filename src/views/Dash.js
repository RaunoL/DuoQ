import React from 'react';
import Button from "../components/Button";

import Main from "../components/Main";

import app from "../services/firebase/base"

function Dash(props) {

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
      <button onClick={signOut}>signout</button>

    </Main>

  )
}
export default Dash