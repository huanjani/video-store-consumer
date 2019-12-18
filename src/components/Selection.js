import React from 'react';
import PropTypes from 'prop-types';
import './Selection.css';

const Selection = ({customer, movie, url}) => {
  // const 

  // addRental = () => {
  //   axios.post(`${url}${movie.title}/check-out`, 
  //   {"customer_id": customer.id, 
  //   "movie": movie.title,
  //   "due_date": })
  //     .then((response) => {
  //       console.log(response.data);

  //     })
  //     .catch((error) => {
  //         console.log(error.errors.customer_id);

  //     });
  // }

    return (
      <div className="selection-box">

        { customer ? (<p>Customer: {customer.name}</p>) : (<p>Customer: None Selected</p>)}
        { movie ? (<p>Movie: {movie.title}</p>) : (<p>Movie: None Selected</p>)}
        { (customer && movie) ? (<p><button>Checkout</button></p>) : ''}

      </div>
    );
  }

  Selection.propTypes = {
    movie: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    customer: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  }

export default Selection;
