import React from "react";
import "./Contacts.css";

const Contact = () => {
  return (
    <div className="AppHeader">
      <div className="fadeIn">
        <div className="boxBox">
          <div className="contactMe">
            <h1>Contact</h1>
            <div className="links">
              <ul>
                <li>
                  <a href="mailto:info@jmkit.com">Email Me</a>
                </li>
                &nbsp;|&nbsp;
                <li>
                  <a
                    href="https://www.linkedin.com/in/jmkit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <h1>Social Media</h1>
            <div className="links">
              <ul>
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
      </div>
    </div>
  );
};

export default Contact;
