import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div id="linksContainer">
        <div className="links">
          <ul>
            <li>
              <Link to="/portfolio">Robert Marsh</Link>
            </li>
            &nbsp;|&nbsp;
            <li>
              <Link to="/portfolio/projects">Projects</Link>
            </li>
            &nbsp;|&nbsp;
            <li>
              <Link to="/portfolio/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
