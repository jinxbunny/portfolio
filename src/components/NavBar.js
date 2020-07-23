import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {

  render() {
    return (
      <div>
        <div id="linksContainer">
          <div className="links">
            <ul>
              <li><Link to="/welcome">Robert Marsh</Link></li>
                &nbsp;|&nbsp;
                <li><Link to="/work">Work</Link></li>
                &nbsp;|&nbsp;
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;