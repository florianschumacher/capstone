import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';

import ListElement from '../modules/ListBox'

const SearchLogic = () => {

    const APP_ID = '73198c18'
    const APP_KEY = '971f353d5c972855c1d4c1f8575bb7c2'

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('low-carb food')

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
            <FormWrapper>
                <form onSubmit={getSearch} className="SearchForm">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                    <button className="search-button"
                        type="submit">Search</button>
                </form>
                <form onSubmit={getSearch} className="FilterForm">
                    <button className="search-button-filter" onClick={() => setQuery('low-carb')}>Low Carb</button>
                    <button className="search-button-filter" onClick={() => setQuery('keto')}>Keto</button>
                    <button className="search-button-filter" onClick={() => setQuery('paleo')}>Paleo</button>
                </form>
            </FormWrapper>
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

const FormWrapper = styled.div`
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

export default SearchLogic;

