import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';

import { makeStyles } from '@material-ui/core/styles';
import LinearBuffer from '@material-ui/core/CircularProgress';

import ListElement from './ListBox'

const LoadingWrapper = styled.div`
position: fixed;
display: flex;
align-items: center;
justify-content: center;   
z-Index: 99;
align-self: center;
`


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'center',
        paddingLeft: '10.375rem',
        paddingTop: '15.875rem',

        '& > * + *': {
            marginLeft: theme.spacing(1),
        },
    },
}));


const SearchLogic = () => {

    // Loading Spinner Code //
    const [loading, setLoading] = useState(false)
    /*     const now = 10; */
    const classes = useStyles();
    /*     const [value, setValue] = React.useState(0); */
    // Loading Spinner Code //
    const APP_ID = '73198c18'
    const APP_KEY = '971f353d5c972855c1d4c1f8575bb7c2'

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('low-carb, Main course')


    useEffect(() => {
        getRecipes()
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        setLoading(true)
    }

    const updateSearch = event => {
        setSearch(event.target.value)
    }

    const getSearch = event => {
        event.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (

        <div className="SearchLogic">
            <div>

            </div>
            <SearchWrapper>
                <form onSubmit={getSearch} className="SearchForm">
                    <StyledInput className="search-bar" placeholder="Find healthy recipes" type="text" value={search} onChange={updateSearch} borders="none" />
                    {/* <button className="search-button"
                        type="submit">Search</button> */}
                </form>
            </SearchWrapper>
            <TagWrapper onSubmit={getSearch} className="FilterForm" >
                <Button onClick={() => setQuery('low-carb, Main course')}>Reset</Button>
                <Button onClick={() => setQuery('low-carb, Main course')}>Low Carb</Button>
                <Button onClick={() => setQuery('vegetarian, Main course')}>Vegetarian</Button>
                <Button onClick={() => setQuery('vegan, Main course')}>Vegan</Button>
                <Button onClick={() => setQuery('gluten-free, Main course')}>Gluten Free</Button>
                <Button onClick={() => setQuery('high-protein, Main course')}>High Protein</Button>
                {/* <Button onClick={() => setQuery('balanced, Main course')}>Balanced</Button> */}
                {/* <Button onClick={() => setQuery('dairy-free, Main course')}>Dairy free</Button> */}
            </TagWrapper>
            <ListWrapper>
                {recipes.map((recipe, index) => (
                    <ListElement
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        totalWeight={recipe.recipe.totalWeight}
                        totalTime={recipe.recipe.totalTime}
                        portions={recipe.recipe.yield}
                    />
                ))}
            </ListWrapper>
            <LoadingWrapper className={classes.root}>
                {loading ? (setRecipes) : (
                    <LinearBuffer />
                )}
            </LoadingWrapper>
        </div>
    )
}


const SearchWrapper = styled.div`
    position: sticky;
    margin-top: -5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    max-width: 23.438rem;
    width: 100%;
    background: #f2f3f3;
    z-index: 99;
    border-style: none;
  `

const TagWrapper = styled.div`
    position: relative;
margin-top: -0.2rem;
    margin-bottom: 0rem;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    height: 2.75rem;
    max-width: 23.438rem;
    width: 100%;
    z-index: 98;
    border-top: 1px grey;
    border-radius:0px;
    background: #FFF9EB;
    justify-content: center;
`

const Button = styled.button`
    background-color: #ebeded;
    min-height: 2.125rem;
    max-height: 1.5rem;
    border: 0.025rem solid lightslategray;
    border-radius: 0.0125rem;
    box-shadow: 0.0125rem 0.0125rem;
    margin-left: 0.025rem;
    margin-right: 0.025rem;
    padding: 0.125rem;
    padding-left: 0.5rem;
    padding-right: 0.4rem;
    font-size: 0.7rem;
    cursor: pointer;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
margin-top: -2rem;
    `

const StyledInput = styled.input`
width: 100%;
font-size: 14px;
padding: 6px 8px;
border-width: 2px;
border-style: solid;
border-color: #b28c40;
margin: 0;`

export default SearchLogic;

