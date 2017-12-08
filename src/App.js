import React, { Component } from 'react';
import logo from './img/profile_photo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Caitlin Steele</h1>
        </header>
        <p className="App-intro">
          I am pretty dang busy these days, <br />
          designing and engineering web apps <br />
          in the life sciences tech space.
          <a href="https://www.linkedin.com/in/caitlinrsteele/" target="_blank" rel="noopener noreferrer">
          More
          </a>
        </p>
      </div>
    );
  }
}

export default App;
