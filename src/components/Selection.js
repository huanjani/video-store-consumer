import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './Selection.css';

const Selection = ({customer, movie, addRentalCallback, returnRentalCallback}) => {

    return (
      <div className="selection-box">
        <div className="selection-box__content">
          { customer ? (<p>Customer: {customer.name}</p>) : (<p>Customer: None Selected</p>)}
          { movie ? (<p>Movie: {movie.title}</p>) : (<p>Movie: None Selected</p>)}
          { (customer && movie) ? (<div><Button variant="primary" className="selection-lft-btn" onClick={() => {addRentalCallback(movie, customer)}} >Check Out</Button> <Button variant="primary" className="selection-rt-btn" onClick={() => {returnRentalCallback(movie, customer)}} >Return</Button></div>): ''}
        </div>
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
