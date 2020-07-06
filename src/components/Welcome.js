import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    return (
      <div className="AppHeader">
        <div className="fadeIn">
          <div id="welcomeBox" className="boxBox">
            <div className="content">
              <h1>Portfolio</h1>
              <span>Robert Marsh</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
