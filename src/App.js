import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Library from './components/Library'

class App extends Component {

  render() {
    const BASE_URL = 'http://localhost:3000/'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Search url={`${BASE_URL}movies`} />

        </p>
      </div>
    );
  }
}

export default App;
