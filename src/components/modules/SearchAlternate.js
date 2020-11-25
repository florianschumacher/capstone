import React, { Component } from 'react'
import styled from 'styled-components/macro';
import axios from 'axios'

// THESE CREDENTIALS MUST BE STORED ON A SERVER, ONLY FOR TEMPORARY USE
const API_URL = 'https://api.edamam.com/search'
const API_KEY = '971f353d5c972855c1d4c1f8575bb7c2'
const API_ID = '73198c18'

const options = {
  method: 'GET',
  url: API_URL,
  params: {
    q: '',
    //health: 'health=high-protein&health=low-carb&health=low-fat',
    //health: 'high-protein',
    app_key: API_KEY,
    app_id: API_ID,
  },
}

class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  getData = (searchQuery) => {
    options.params.q = searchQuery
    axios.request(options).then(({ data }) => {
      if (data) {
        this.setState({ results: data.data })
      }
    })
  }

  handleInputChange = (event) => {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query.length >= 4) {
        this.getData(this.state.query)
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search
