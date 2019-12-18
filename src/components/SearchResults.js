import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SearchResults.css';
class SearchResults extends Component {
  constructor(props) {
    super();
  }

  searchResultToLibrary(movie) {
    axios.post(`${this.props.url}`, {
      "title": movie.title,
      "overview": movie.overview,
      "release_date": movie.release_date,
      "image_url": movie.image_url,
      "external_id": movie.id,
      "inventory": 5
    })
    .then((response) => {

      })
    .catch((error) => {
      // this.setState({ error: errors.title });
      console.log(error);
    });
  }

render () {
  const getMovies = this.props.movieData.map((movie, i) => {
    const listingColor = (i % 2 === 0) ? 'movie-card_one' : 'movie-card_two'
    return (
      <div key={i}
        className={listingColor}>
        <div className="movie-card__content">
          <div >
            <img src={movie.image_url} width={200} mode='fit' alt={`${movie.title} poster`}/>

            <h3>{movie.title}</h3>
            <p className="movie-card__content_overview">{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>
              <button type="button" className="movie-select" onClick={this.searchResultToLibrary(movie)}>
                Add to Rental Library
              </button>
            </p>
          </div>
        </div>
      </div>
        )
      })

    return (
      <div>
        {getMovies}
      </div>
    )
    }
  }



export default SearchResults;
