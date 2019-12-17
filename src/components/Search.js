import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      movie: {},
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

    axios.get(`${this.props.url}/${this.state.query}`)
      .then((response) => {
        this.setState({ movie: response.data });
      })
      .catch((errors) => {
        this.setState({ error: errors.title });
      });

      console.log(`errors: ${this.state.errors}`)
      console.log(`movie: ${this.state.movie.title}`)

      this.setState({
        query: '',
      });
    }

  render() {

    return (
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
            {this.state.query}
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

    );
  }
}


export default Search;
