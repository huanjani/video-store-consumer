import React, { Component } from 'react';
import axios from 'axios';

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
      })
      .catch((error) => {
        this.setState({ error: error.errors.title });
      });
  }

  render() {

    const getMovies = this.state.movies.map((movie) => {
        return (
          <div key={movie.id} >
            <p>{movie.title}</p>
          </div>
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
}

export default Library;
