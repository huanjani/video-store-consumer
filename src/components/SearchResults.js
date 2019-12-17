import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';


const SearchResults = (props) => {
  const { movieData } = props;
  const getMovies = movieData.map((movie) => {
    return (
      <div key={movie.id} >
        <p>{movie.title}</p>
      </div>
      // <div key={movie.id} >
      //     <input type="radio" value="one" id="radio-one" class="form-radio" checked><label for="radio-one">{movie.title}</label></input>
      //     // Add more info about each movie (incl image?) so user can see which movie?
      // </div>
    )
  });

  return (
    <section >
    <div className="board">
      {getMovies}
    </div>
    </section>
  )
}

export default SearchResults;
