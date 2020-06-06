import React, { Component} from 'react';
import './NavBar.css'

class NavBar extends Component {

    render (){
        return (
        <div>
          <a href="#welcome">Welcome</a>
          |
          <a href="#work">Work</a>
          |
          <a href="#contact">Contact</a>
        </div>
      );
    }
}

export default NavBar;
