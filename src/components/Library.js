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
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
      .then((response) => {
        this.setState({ movies: response.data });
        console.log(this.state.movies)
      })
      .catch((error) => {
        this.setState({ error: error.errors.title });
      });
  }

  render() {

    const getMovies = this.state.movies.map((movie) => {
      const cardColor = (movie.id % 2 === 0) ? 'movie-card_lt' : 'movie-card_dk'
 
        return (

          <div key={movie.id} className={cardColor}> 
            <div className="movie-card__content">
              <div >
                  <img src={movie.image_url} width={200} mode='fit' alt={`${movie.title} poster`}/>

                <h3>{movie.title}</h3>
                <p className="movie-card__content_overview">{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>

                <p><button
                onClick={() => this.props.selectMovieCallback(movie)}
                >
                Select Movie
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
