import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Library.css'

class Library extends Component {
  constructor(props) {
    super();

    this.state = {
      movies: [],
      error: '',
      details: '',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`, {
      params: {
        "sort": "title",
      }
    })
      .then((response) => {
        this.setState({ movies: response.data });
        console.log(this.state.movies)
      })
      .catch((error) => {
        this.setState({ error: error.errors.title });
      });
  }

  onClickDetails = (movie) => {
    this.setState({ details: movie.id })
  }

  render() {

    const getMovies = this.state.movies.map((movie) => {
      const cardColor = (movie.id % 2 === 0) ? 'movie-card_lt' : 'movie-card_dk'
        return (
          <section>

          <div key={movie.id} className={cardColor}>
            <div className="movie-card__content">
              <div >
                {
                  (this.state.details === movie.id) &&
                  (<div>
                    <p className="movie-card__content_overview">{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                  </div>)
                }
                {
                  (this.state.details !== movie.id) &&
                  (<div>
                    <img className='img' src={movie.image_url} width={200} mode='fit' alt={`${movie.title} poster`}/>
                    <h3>{movie.title}</h3>

                    <p><button
                    onClick={() => this.props.onSelectCallback('currentMovie', movie)}
                    >
                    Select Movie
                    </button>
                    </p>

                    <p><button
                    onClick={() => this.onClickDetails(movie)}
                    >
                    View Details
                    </button>
                    </p>
                </div>)
              }
              </div>
            </div>
          </div>
          </section>
        )
      });

    return (
      <section>
        <h3>Rental Library</h3>
      <div className='movies-container'>
        {getMovies}
      </div>
      </section>
    )
  }
}

Library.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Library;
