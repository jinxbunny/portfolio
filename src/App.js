import React from 'react';
import Welcome from './components/Welcome'
import Work from './components/Work'
import Contact from './components/Contact'
import NavBar from './components/NavBar.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navBar">
        <NavBar />
      </div>
      <a id="welcome">< Welcome /></a>
      <a id="work">< Work /></a>
      <a id="contact">< Contact /></a>
    </div>
  );
}

export default App;
