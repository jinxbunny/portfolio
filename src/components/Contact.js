import React, { Component } from 'react';
import './Contacts.css';

class Contact extends Component {

  render() {
    return (
      <div className="AppHeader">
        <div className="fadeIn">
          <div className="boxBox">
            <div className="content">
              <h1>Contact</h1>
              <div className="contacts">
                <ul>
                  <li><a href="mailto:info@jmkit.com">email </a></li>
                &nbsp;|&nbsp;
                <li><a href="https://www.linkedin.com/in/jmkit/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div></div></div>
    );
  }
}

export default Contact;
