import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {Uploader} from './Uploader/uploader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Simple Uploader</h1>
        </header>
        <div className="App-intro">
			<div className="upload-wrapper">
				<Uploader />
				<Uploader />
			</div>
		</div>
		
      </div>
    );
  }
}

export default App;
