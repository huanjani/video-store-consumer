import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Library from './components/Library'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render() {
    const BASE_URL = 'http://localhost:3000/'

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jallie's Video Emporium</h1>
        </header>
        <p><Link to="/search">Search</Link></p>
        <p><Link to="/library">Library</Link></p>
        
        <Switch>
          <Route path="/search">
            <Search url={`${BASE_URL}movies`} />
          </Route>
          <Route>
            <Library url={`${BASE_URL}movies`} />
          </Route>
        </Switch>



      </div>
      </Router>
    );
  }
}

export default App;
