import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults'
import './Search.css'


class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      movies: [],
      query: '',
      error: '',
    };
  }

  onInputChange = (event) => {
    console.log(this.state.query)

    this.setState({
      query: event.target.value,
    });
    console.log(`updated: ${this.state.query}`)
  }

  onSubmit = (event) => {
    event.preventDefault();

    axios.get(`${this.props.url}/search/${this.state.query}`)
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((errors) => {
        this.setState({ error: errors.title });
        console.log(errors.title)
      });

      this.setState({
        query: '',
      });
    }

  render() {

    return (
      <div>
        <form className="text" onSubmit={this.onSubmit}>

          <div>
            <label className="text" htmlFor="text">Search for a movie: </label>
          </div>

          <div>
            <textarea className="text"
              name="query"
              onChange={this.onInputChange}
              value={this.state.query}
            >
            </textarea>
          </div>

          <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Search"
            onClick={this.onSubmit}
          />
        </form>
        <SearchResults movieData={this.state.movies} url={this.props.url}/>
      </div>
    );
  }
}

Search.propTypes = {
  url: PropTypes.string.isRequired,
}


export default Search;
