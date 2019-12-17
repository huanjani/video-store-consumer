import React from 'react';
import PropTypes from 'prop-types';

const Selection = ({customer, movie}) => {

    return (
      <div>
        { customer ? (<p>Customer: {customer.name}</p>) : ''}
        { movie ? (<p>Movie: {movie.title}</p>) : ''}
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
