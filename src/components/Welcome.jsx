import React from "react";

const Welcome = () => {
  return (
    <div className="AppHeader">
      <div className="fadeIn">
        <div className="welcomeBox">
          <div className="boxBox">
            <h1>Robert Marsh</h1>
            <p>Designer . Developer . Creator</p>
            <div className="gitLink">
              <a
                href="https://github.com/jinxbunny/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                This Site on Git Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
