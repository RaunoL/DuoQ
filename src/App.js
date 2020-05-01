import React from 'react';
import {
  Switch,
  Route,
  useLocation
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
import useAuth from "./services/firebase/useAuth"

function App() {
  const { isAuthenticated } = useAuth();
    return ( 
      <Background>
      <Container>
      <Header/>
      <Router>
      <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/sign-in">
                <Signin />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/main">
                <Dash />
              </Route>
              <Route path="/sign-up">
                <Signup />
              </Route>
            </Switch>
            </Router>
      </Container>
    </Background>
      
      
    );
}

export default App;