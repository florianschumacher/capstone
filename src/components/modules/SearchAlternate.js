<<<<<<< Updated upstream
import React, { Component } from 'react';
import axios from 'axios';
=======
import React, { Component } from 'react'
import styled from 'styled-components/macro';
import axios from 'axios'
>>>>>>> Stashed changes

/* const { API_KEY } = '1a5b86b12fmsh9af6d7ac9a3bba0p14c115jsn929a1c371e55'
const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' */

const options = {
    method: 'GET',
    url: 'https://api.edamam.com/search',
    params: {
        query: '',
        health: 'health=high-protein&health=low-carb&health=low-fat'
    },
    headers: {
        'app_key': '971f353d5c972855c1d4c1f8575bb7c2',
        'app_id': '73198c18'
    }
};

axios.request(options).then(({ data }) => { this.setState({ results: data.data }) })

class Search extends Component {
<<<<<<< Updated upstream
    state = {
        query: '',
        results: []
    }

    /*     getData = () => {
            axios.fetch(`${API_URL}?api_key=${API_KEY}?prefix${this.state.query}`)
                .then(({ data }) => { this.setState({ results: data.data }) })
        } */



    handleInputChange = () => {
        this.setState({ query: this.search.value },
            () => {
                if (this.state.querry && this.state.query.length > 1) {
                    if (this.state.query.length % 2 === 0) { this.getData() }
                }
            })
    }


    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Search;

=======
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

export default Search

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
  `;
>>>>>>> Stashed changes
