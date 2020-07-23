import React, { Redirect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Welcome from "./components/Welcome";
import Work from "./components/Work";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/portfolio" />
      </Route>
      <div className="App">
        <div id="navBar">
          <NavBar />
        </div>
        <Switch>
          <Route path="/portfolio" component={Welcome} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
