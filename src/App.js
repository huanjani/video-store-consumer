import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Search from './components/Search'
import Library from './components/Library'
import Customers from './components/Customers'
import Selection from './components/Selection'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      currentMovie: '',
      currentCustomer: '',
    }
  }

  onSelectCustomer = (customer) => {
      this.setState({
        currentCustomer: customer,
      });
  }

  onSelectMovie = (movie) => {
    this.setState({
      currentMovie: movie,
    });
}

  onClickAddRental = (movie, customer) => {
    const rental = {"customer_id": customer.id, 
    "title": movie.title,
    "due_date": "2020-01-15"}

    axios.post(`http://localhost:3000/${movie.title}/check-out`, rental)
    console.log(rental)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

    this.setState({
      currentMovie: '',
      currentCustomer: '',
    });
}


  render() {
    const BASE_URL = 'http://localhost:3000/'
    const selectBox = (this.state.currentCustomer || this.state.currentMovie) ? <Selection customer={this.state.currentCustomer} movie={this.state.currentMovie} addRentalCallback={this.onClickAddRental}/> : ''

    return (
    
      <Router>
      <div className="App">
      <nav>
        <header className="App-header">
           {selectBox}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jallie's Video Emporium</h1>
        </header>
  
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
            <Library url={`${BASE_URL}movies`} selectMovieCallback={this.onSelectMovie} />
          </Route>
          <Route path="/customers">
            <Customers url={`${BASE_URL}customers`} selectCustomerCallback={this.onSelectCustomer} />
          </Route>
        </Switch>
      </div>
      </Router>

    );
  }
}

export default App;
