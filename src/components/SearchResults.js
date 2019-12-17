import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';


const SearchResults = (props) => {
  const { movieData } = props;
  const getMovies = movieData.map((movie, i) => {
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
              <button type="button" className="movie-select">
                Select
              </button>
            </p>
          </div>
        </div>
      </div>
        )
      })

    return (
      <section>
        <div>
         {getMovies}
        </div>
      </section>
    )
    }



export default SearchResults;
