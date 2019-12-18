import React from 'react';
import PropTypes from 'prop-types';
import './Selection.css';

const Selection = ({customer, movie, addRentalCallback}) => {

    return (
      <div className="selection-box">

        { customer ? (<p>Customer: {customer.name}</p>) : (<p>Customer: None Selected</p>)}
        { movie ? (<p>Movie: {movie.title}</p>) : (<p>Movie: None Selected</p>)}
        { (customer && movie) ? (<p><button onClick={() => {addRentalCallback(movie, customer)}} >Checkout</button></p>) : ''}
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
