import React, { useEffect, useState } from 'react';
/* import styled, { keyframes } from 'styled-components/macro'; */

import ListElement from '../modules/ListBox'

const SearchLogic = () => {

    const APP_ID = '73198c18'
    const APP_KEY = '971f353d5c972855c1d4c1f8575bb7c2'

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getRecipes()
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = event => {
        setSearch(event.target.value)
        console.log(search)
    }

    const getSearch = event => {
        event.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className="SearchLogic">
            <form onSubmit={getSearch} className="Search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button"
                    type="submit">Search</button>
            </form>
            {recipes.map(recipe => (
                <ListElement
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}

export default SearchLogic;

