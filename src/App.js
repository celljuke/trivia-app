import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import { Logo } from './components';

class App extends Component {
  render = () => (
    <div className="trivia-application">
      <div className="sky"></div>
      <div className="main-window">
        <Logo/>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
