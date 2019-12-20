import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SearchResults.css';
import Feedback from './Feedback'

class SearchResults extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      message: '',
    }
  }

  searchResultToLibrary = (movie) => {
    (axios.post(`${this.props.url}`, {
      "title": movie.title,
      "overview": movie.overview,
      "release_date": movie.release_date,
      "image_url": movie.image_url,
      "external_id": movie.external_id,
      "inventory": 5
    })
    .then((response) => {
      this.setState({message: `${movie.title} successfully added to Rental Library!`, title: movie.title})
      })
    .catch((error) => {
      this.setState({message: `${movie.title} was already in the Rental Library.`, title: movie.title})
    })
    )
  }

  render() {
  const alert = (this.state.message !== '') ? <Feedback message={this.state.message} background='grey'/> : ''
  const getMovies = this.props.movieData.map((movie, i) => {
    const listingColor = (i % 2 === 0) ? 'movie-card_one' : 'movie-card_two'
    return (
      <div key={i}
        className={listingColor}>
        <div>
          <div className="img">
            <img src={movie.image_url} width={200} mode='fit' alt={`${movie.title} poster`}/>

            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>

              <button type="button" className="movie-select" onClick={() => this.searchResultToLibrary(movie)}>
                Add to Rental Library
              </button>
                {this.state.title === movie.title && (<div>{alert}</div>)}
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

SearchResults.propTypes = {
  url: PropTypes.string.isRequired,
  movieData: PropTypes.array,
}


export default SearchResults;
