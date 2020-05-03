import React from 'react';
import {
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./scss/style.scss";
import Index from "./views/Index";
import Dash from "./views/Dash";
import Settings from "./views/Settings";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Header from "./components/Header";
import Container from "./components/Container";
import Background from "./components/Background";
import Protected from "./components/Protected";
import useAuth from "./services/firebase/useAuth";

//firebase
import firebase from "firebase/app";   // the firbase core lib
import 'firebase/auth'; // specific products
import firebaseConfig from "./config/firebase/firebase";  // the firebase config we set up ealier
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const { isAuthenticated, createEmailUser, signInEmailUser} = useAuth(firebase.auth());
  return (
    <Background>
      <Container>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/sign-in">
              <Signin signInEmailUser={signInEmailUser}/>
            </Route>
           
              <Protected authenticated={isAuthenticated} exact path="/settings">
                <Settings />
              </Protected>
            
              <Protected authenticated={isAuthenticated} exact path="/dash">
                <Dash />
              </Protected>
            <Route path="/sign-up">
              <Signup createEmailUser={createEmailUser}/>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Background>


  );
}

export default App;