import { Component } from 'react';
import logo from './react-logo.svg';
import './App.css';
import React from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        My React App...
        
        <img src={logo} className="temp-images" alt="react logo" />
        <img src="acl-logo.png" className="temp-images" alt="acl logo" />
      
      </div>
    );
  }

}

export default App;
