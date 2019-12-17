import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Library.css'

class Customers extends Component {
  constructor(props) {
    super();

    this.state = {
      customers: [],
      error: '',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
      .then((response) => {
        this.setState({ customers: response.data });
        console.log(this.state.customers)
      })
      .catch((error) => {
        this.setState({ error: error.errors });
      });
  }

  render() {

    const getCustomers = this.state.customers.map((customer) => {
      const cardColor = (customer.id % 2 === 0) ? 'movie-card_lt' : 'movie-card_dk'
 
        return (

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
                type="button"
                className="movie-select"
          
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
      <section >
      <div>
        {getCustomers}
      </div>
      </section>
    )
  }
}

Customers .propTypes = {
  url: PropTypes.string.isRequired,
}

export default Customers;
