import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Library from './components/Library'
import Customers from './components/Customers'
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
        <nav>
          <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search">
            <Search url={`${BASE_URL}movies`} />
          </Route>
          <Route path="/library">
            <Library url={`${BASE_URL}movies`} />
          </Route>
          <Route path="/customers">
            <Customers url={`${BASE_URL}customers`} />
          </Route>
        </Switch>
      </div>
      </Router>

    );
  }
}

export default App;
