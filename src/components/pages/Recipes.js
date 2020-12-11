import { useLocation } from "react-router-dom";
import styled from 'styled-components/macro';
import React from 'react'

import Ingredient from "./page_components/Ingredient";
import Header from '../modules/Header'

import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';

///

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '23.125rem',
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


///

export default function Recipes() {
    const location = useLocation()
    const { title, calories, image, ingredients, portions, totalWeight, totalTime } = location.state
    //

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    //
    let duration = totalTime
    if (duration > 0) {
        const min = parseInt(totalTime, 10);
        let hours = Math.floor(min / 3600);
        let minutes = Math.floor((min - (hours * 3600)) / 60);

        duration = (hours) + ' hrs ' + (minutes) + ' mins';
    } else {
        duration = 'No Information on Duration'
    }


    return (
        <div>
            <Wrapper>
                <Header title="Receipt" />
            </Wrapper>

            <RecipeWrapper>
                <h2>
                    {title}
                </h2>
                <img src={image} alt="" />
                <InfoWrapper>
                    <InfoElement>
                        <p>
                            {calories.toFixed(0)} <br />Calories
                    </p>
                    </InfoElement>
                    <InfoElement>
                        <p>
                            {totalWeight?.toFixed(0)} <br />Gramms
                    </p>
                    </InfoElement>
                    <InfoElement>
                        <p>
                            {portions} <br />Portions
                    </p>
                    </InfoElement>
                </InfoWrapper>
                <TimeElement>
                    <p>
                        Preperation Time <br /> {duration}
                    </p>
                </TimeElement>
            </RecipeWrapper>
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="95%"

                    >
                        <Tab label="Ingredients" />
                        <Tab label="Start cooking" />
                    </Tabs>
                </AppBar>
                <IngredientListWrapper>
                    <TabPanel value={value} index={0} dir={theme.direction}>

                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <Ingredient title={ingredient.text} key={index} />
                            ))}
                        </ul>

                    </TabPanel>
                </IngredientListWrapper>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="Cook it!">
                        <p>This is empty space. Sincerly, Captn Obvious.</p>
                    </div>
                </TabPanel>
            </div>

        </div >
    )
}
const Wrapper = styled.section`
position: fixed;
    margin-top: 0rem;
    margin-left: 0rem;
    width: 95%;`

const RecipeWrapper = styled.section`
    margin-top: 0rem;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 95%;
    bottom: 0.125rem;
    border-radius: 0.1875rem;
    background: whitesmoke;
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 0.3125rem;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
    };
    p {
        font-size: 0.725rem;
        font-weight: 300;
   
    };
    img {
        border-radius: 0.1875rem;
        border: solid;
        border-color: #fff;
        border-width: 0.125rem;
        max-height: 15rem;
        min-width: 21.875rem;
        object-fit: cover;
    };
    `
const InfoWrapper = styled.div`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flexbox;
    justify-content: flex-start;
    width: 95%;
    /* flex-direction: row; */
    `
const IngredientListWrapper = styled.div`
margin-top: 0.5rem;
justify-content: flex-start;
width: 95%;
padding-bottom: 3.125rem;

ul {
    width: 95%;
    list-style: none;
    padding-left: 0;
}
`



const InfoElement = styled.div`
margin-top: 0.5rem;
margin-left: 0rem;
margin-right: 0.125rem;
padding-left: 0.125rem;
padding-right: 0.125rem;
width: 32%;
text-align: center;
display: flexbox;
flex-direction: row;
justify-content: center;
background-color: white;
font-size: 0.5em;
`
const TimeElement = styled.div`
width: 95%;
margin-top: 0.5rem;
margin-left: 0.125rem;
margin-right: 0.125rem;
padding-left: 0.125rem;
padding-right: 0.125rem;
display: flexbox;
text-align: center;
flex-direction: row;
justify-content: center;
font-size: 0.0625rem;
background-color: white;
`