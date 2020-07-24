import React from "react";
import "./Work.css";

import video0 from "../img/video0.png";
import video1 from "../img/video1.png";
import video2 from "../img/video2.png";

const Jmkit = () => {
  return (
    <div>
      <h2>JMKit.com</h2>
      <br />
      <div className="swipeContainer2">
        <p>
          I've been working on my own site{" "}
          <a
            href="https://www.jmkit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            JMKit.com
          </a>{" "}
          since 2008
        </p>
        <br />
        <p id="siteInfo">
          Using a variety of web technologies I've been brining together my
          passion for
          <br />
          <br />
          Design - Development - Production - Art - Animation - Music
          <br />
          <br />
          In order to create a site that can promote creativity and storytelling
          through interactive entertainment with cute and cool characters.
        </p>
        <br />
        <div className="videoGallery">
          <a
            href="https://www.youtube.com/watch?v=pem1fJ7mJxw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={video0} alt="Game Sample Video" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=MMndQitWKFU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={video1} alt="Animation Sample Video" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=stn_M25wsi4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={video2} alt="Music Sample Video" />
          </a>
        </div>
        <br />
        <div className="links">
          <ul>
            <li>
              <a
                href="https://www.jmkit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JMKit.com
              </a>
            </li>
            &nbsp;|&nbsp;
            <li>
              <a
                href="https://www.instagram.com/jmkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            &nbsp;|&nbsp;
            <li>
              <a
                href="https://www.youtube.com/jmkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jmkit;
