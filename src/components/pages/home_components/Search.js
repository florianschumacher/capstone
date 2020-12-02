// functional
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';

// pages
import ListElement from './ListBox'

// styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5px',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '2px',
        '& > *': {
            margin: theme.spacing(0),
            width: '25ch',
        },
    },
}));


const SearchLogic = () => {
    const classes = useStyles();

    const APP_ID = '73198c18'
    const APP_KEY = '971f353d5c972855c1d4c1f8575bb7c2'

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('low-carb, food')

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
            <SearchWrapper>
                <form onSubmit={getSearch} className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-size-small" label="Search" variant="outlined" className="search-bar" type="text" value={search} onChange={updateSearch} size="small" />

                </form>
            </SearchWrapper>
            <TagWrapper>
                <form onSubmit={getSearch} className="FilterForm">
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('low-carb, Main course')}>Low Carb</Button>
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('keto-friendly, Main course')}>Keto</Button>
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('paleo, Main course')}>Paleo</Button>
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('gluten-free, Main course')}>Gluten free</Button>
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('high-protein, Main course')}>high-protein</Button>
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('balanced, Main course')}>Balanced</Button>
                    <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setQuery('dairy-free, Main course')}>Dairy-free</Button>
                </form>
            </TagWrapper>

            {recipes.map((recipe, index) => (
                <ListElement
                    key={index}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}


        </div>
    )
}





const SearchWrapper = styled.div`
  margin-top: -5rem;
  position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  max-width: 100%;
  width: 100%;
  background-color: hsla(216, 50%, 96%);
  z-index: 10;
  border-style: none;
  `

const TagWrapper = styled.div`
position: top;
padding: 1px;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
/* height: 3.125rem; */

width: 100%;
background-color: hsla(216, 50%, 96%);
z-index: 5;
border-style: none;
`



export default SearchLogic;

