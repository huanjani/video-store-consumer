import React from 'react';
import axios from 'axios';
import './SearchResults.css';

const SearchResults = (props) => {

  const searchResultToLibrary = (movie) => {
    // let curInventory = 5;
    // (notInLibrary(movie))
    // ?
    (axios.post(`${props.url}`, {
      "title": movie.title,
      "overview": movie.overview,
      "release_date": movie.release_date,
      "image_url": movie.image_url,
      "external_id": movie.external_id,
      "inventory": 5
    })
    .then((response) => {
      let curInventory = response.title
      console.log(response.title)
      })
    .catch((error) => {
      console.log(error);
    })
    )
    // :
    // (axios.patch(`${props.url}/${movie.title}/increase`, {
    //   "inventory": (curInventory += 1)
    // })
    // .then((response) => {
    //   console.log(response)
    //   })
    // .catch((error) => {
    //   console.log(error);
    // })
    // )
  }


  // const notInLibrary = (movie) => {
  //   let needToAdd;
  //   axios.get(`${props.url}/${movie.title}`)
  //     .then((response) => {
  //       console.log(response.status);
  //       needToAdd = false;
  //     })
  //     .catch((error) => {
  //       console.log(error, 'is not in library');
  //       needToAdd = true;
  //     });
  //   return needToAdd;
  // }

  const getMovies = props.movieData.map((movie, i) => {
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

              <button type="button" className="movie-select" onClick={() => searchResultToLibrary(movie)}>
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





export default SearchResults;
