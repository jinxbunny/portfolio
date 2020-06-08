import React, { Component} from 'react';
import './NavBar.css'

class NavBar extends Component {

    render (){
        return (
        <div>
          <div id="linksContainer">
            <div id="links">
              <a href="#welcome">Welcome</a>
              |
              <a href="#work">Work</a>
              |
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      );
    }
}

export default NavBar;
