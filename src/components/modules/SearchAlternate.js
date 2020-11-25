import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro';

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
      <FormField>
        <input
          placeholder="Search for..."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </FormField>
    )
  }
}

const FormField = styled.div`
  position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  max-width: 23.438rem;
  width: 100%;
  background-color: hsla(216, 50%, 96%);
  z-index: 10;
  border-style: none;
  `


export default Search
