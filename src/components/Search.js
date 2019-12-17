import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults'


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
        response.data.map((movie) => {

        })
        this.setState({ movies: response.data });
      })
      .catch((errors) => {
        this.setState({ error: errors.title });
        console.log(errors.title)
      });

      console.log(`errors: ${this.state.errors}`)
      console.log(`movies: ${this.state.movies.title}`)

      this.setState({
        query: '',
      });
    }

  render() {

    return (
      <div>
        <form className="" onSubmit={this.onSubmit}>

          <div>
            <label className="" htmlFor="text">Search for a movie: </label>
          </div>

          <div>
            <textarea className=""
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
        <SearchResults movieData={this.state.movies} />
      </div>
    );
  }
}


export default Search;
