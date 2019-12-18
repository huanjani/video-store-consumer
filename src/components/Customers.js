import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import Pagination from './Pagination'
import './Library.css'

class Customers extends Component {
  constructor(props) {
    super();

    this.state = {
      customers: [],
      error: '',
      currentPage: 1,
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`, {
      params: {
        "sort": "name",
        "p": 1,
        "n": 10
      }})
      .then((response) => {
        this.setState({ customers: response.data });
        console.log(this.state.customers)
        console.log(`total customers ${this.state.customers.length}`)
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: error.errors });
      });
  }

  nextPage = () => {
    axios.get(`${this.props.url}`, {
      params: {
        "sort": "name",
        "p": this.state.currentPage + 1,
        "n": 10
      }})

      .then((response) => {
        this.setState({ 
          customers: response.data,
          currentPage: this.state.currentPage + 1,
         });
        console.log(this.state.customers)
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: error.errors });
      });
  }

  previousPage = () => {
    if (this.state.currentPage - 1 > 1) {
      axios.get(`${this.props.url}`, {
        params: {
          "sort": "name",
          "p": this.state.currentPage -1,
          "n": 10
        }})

        .then((response) => {
          this.setState({ 
            customers: response.data,
            currentPage: this.state.currentPage - 1,
          });
          console.log(this.state.customers)
        })
        .catch((error) => {
          console.log(error)
          this.setState({ error: error.errors });
        });
    }
  }


  render() {

    const getCustomers = this.state.customers.map((customer) => {
      const cardColor = (customer.id % 2 === 0) ? 'movie-card_lt' : 'movie-card_dk'
 
        return (
          // const numberPages = Math.floor(this.state.totalResults / 10)

          <div key={customer.id} className={cardColor}> 
            <div className="movie-card__content">
              <div >
                <h3>{customer.name}</h3>
                <p>Address:
                  <br />{customer.address}
                  <br />{customer.city}, {customer.state} {customer.postal_code}</p>

                <p>Phone: 
                  <br />{customer.phone}</p>

                <p>Registered At:
                  <br />{customer.registered_at}
                </p>
                <p>Account Credit:
                  <br />{customer.account_credit}
                </p>
                <p>Movies Checked Out:
                  <br />{customer.movies_checked_out_count}
                </p>

                <p><button
                  onClick={() => this.props.selectCustomerCallback(customer)}
                >
                Select Customer
                </button>
                </p>
              </div>
            </div>
          </div>
        )
      });

    return (
      <section className='customers-container'>
        <h3>{`Page Number ${this.state.currentPage}`}</h3>
      <div>
        {getCustomers}
      </div>
      <button
        onClick={() => this.previousPage()}
        >
        Previous Page
        </button>
      <button
        onClick={() => this.nextPage()}
        >
        Next Page
        </button>
      </section>
    )
  }
}

Customers .propTypes = {
  url: PropTypes.string.isRequired,
}

export default Customers;
