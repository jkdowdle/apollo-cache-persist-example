import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Start from './Start'

class App extends Component {
  state = {
    show: false
  }

  toggle = () =>
    this.setState({ show: !this.state.show })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React. Offline</h1>
        </header>
        <br/><br/>
        {/* <button onClick={this.toggle}>Show it</button>
        <br/><br/>
        {this.state.show && <Start />} */}
        <Start />
      </div>
    );
  }
}

export default App;
