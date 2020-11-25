import React, { Component } from 'react';
import axios from 'axios';

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

