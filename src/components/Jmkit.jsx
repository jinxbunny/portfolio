import React from "react";
import "./Work.css";

const Jmkit = () => {
  return (
    <div>
      <h2>My Website</h2>
      <br />
      <div className="swipeContainer2">
        <h4>
          I've been working on my own site{" "}
          <a href="https://www.jmkit.com">JMKit.com</a> since 2008
        </h4>
        <p id="siteInfo">
          Using a variaity of web technologies I've been brining together my
          passion for Design - Development - Production - Art - Music
          <br />
          to create a site that can promote creativity and storytelling through
          interactive entertainment with cute and cool characters.
        </p>
        <div className="links">
          <ul>
            <li>
              <a href="https://www.jmkit.com/">JMKit.com</a>
            </li>
            &nbsp;|&nbsp;
            <li>
              <a href="https://www.instagram.com/jmkit"> Instagram </a>
            </li>
            &nbsp;|&nbsp;
            <li>
              <a href="https://www.youtube.com/jmkit"> YouTube </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jmkit;
