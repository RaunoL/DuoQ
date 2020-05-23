import React  from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./scss/style.scss";
import Index from "./views/Index";
import Dash from "./views/Dash";
import Settings from "./views/Settings";
import Header from "./components/Header";
import Container from "./components/Container";
import Background from "./components/Background";
import { AuthProvider } from "./services/firebase/auth";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Background>
      <Container>
        <Header />
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <ProtectedRoute exact path="/dash" component={Dash}></ProtectedRoute>
              <ProtectedRoute exact path="/settings" component={Settings}></ProtectedRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </Container>
    </Background>
  );
}

export default App;