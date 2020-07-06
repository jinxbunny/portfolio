import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";

import Welcome from './components/Welcome'
import Work from './components/Work'
import Contact from './components/Contact'
import NavBar from './components/NavBar.js'
import './App.css';


function App() {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/welcome" />
      </Route>
      <div className="App">
        <div id="navBar">
          <NavBar />
        </div>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
