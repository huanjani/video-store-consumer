import React, { Component } from 'react';
import ape from './ape.jpeg';
import shelves from './videoStoreShelves.jpg'
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import Selection from './components/Selection';
import CustDetail from './components/CustDetail';
import Feedback from './components/Feedback';
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
      detailCustomer: '',
      customerPage: 1,
      baseUrl: 'http://localhost:3000/',
      message: '',
    }
  }

  onSelect = (item, value) => {
    this.setState({
      [item]: value,
    });
  }

  onClickAddRental = (movie, customer) => {
    const today = new Date()

    function addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    const rental_due = addDays(today, 7)

    const rental = {"customer_id": customer.id,
    "title": movie.title,
    "due_date": rental_due }

    axios.post(`${this.state.baseUrl}rentals/${movie.title}/check-out`, rental)
    .then((response) => {
      console.log(response);
      this.setState({
        currentMovie: '',
        currentCustomer: '',
        message: 'Checkout successful!',
      });
    })
    .catch((error) => {
        console.log(error);
    });
}
  onClickReturnRental = (movie, customer) => {
    const rental = {
    "title": movie.title,
    "customer_id": customer.id
    }
    axios.post(`${this.state.baseUrl}rentals/${movie.title}/return`, (rental))
    .then((response) => {
      console.log(response);
      this.setState({
        currentMovie: '',
        currentCustomer: '',
        message: 'Return successful!'
      });
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    const BASE_URL = this.state.baseUrl;
    const selectBox = (this.state.currentCustomer || this.state.currentMovie) ? <Selection customer={this.state.currentCustomer} movie={this.state.currentMovie} addRentalCallback={this.onClickAddRental} returnRentalCallback={this.onClickReturnRental}/> : <Feedback message={this.state.message} background='pink'/>



    return (
      <main>
      <Router>
      <div className="App">
      <nav>
        <header className="App-header">
           {selectBox}
          <img src={ape} className="App-logo" alt="logo" />
          <h1 className="App-title">Apey Eye Video Store</h1>
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
            <Library url={`${BASE_URL}movies`} onSelectCallback={this.onSelect} />
          </Route>
          <Route path="/customers">
        { this.state.detailCustomer ? <CustDetail url={`${BASE_URL}rentals/cust_rentals`} customer={this.state.detailCustomer} onSelectCallback={this.onSelect}/> : <Customers url={`${BASE_URL}customers`} onSelectCallback={this.onSelect}/> }
          </Route>
          <Route path="">
            <img src={shelves} alt="shelves background" className="shelves"/>
          </Route>
        </Switch>
      </div>
      </Router>

      <footer>&copy; 2019 Janice Huang and Hallie Johnson</footer>
      </main>
    );
  }
}

export default App;
