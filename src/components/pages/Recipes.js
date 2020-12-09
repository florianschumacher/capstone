import { useLocation } from "react-router-dom";
import styled from 'styled-components/macro';

import Ingredient from "./page_components/Ingredient";
import Header from '../modules/Header'

export default function Recipes() {
    const location = useLocation()
    const { title, calories, image, ingredients, portions, totalWeight, totalTime } = location.state
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
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <Ingredient title={ingredient.text} key={index} />
                    ))}
                </ul>
            </RecipeWrapper>
        </div >
    )
}
const Wrapper = styled.section`
    display: fixed;
    margin-top: 0rem;
    margin-left: 0rem;`

const RecipeWrapper = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
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
        font-size: 1.125rem;
        padding-left: -0.3125rem;
        
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
    width: 100%;
    /* flex-direction: row; */
    `

const InfoElement = styled.div`
margin-top: 0.5rem;
margin-left: 0.125rem;
margin-right: 0.125rem;
padding-left: 0.125rem;
padding-right: 0.125rem;
width: 31%;
text-align: center;
display: flexbox;
flex-direction: row;
justify-content: center;
font-size: 0.75rem;
background-color: white;
font-size: 0.5rem;
`
const TimeElement = styled.div`
width: 100%;
margin-top: 0.5rem;
margin-left: 0.125rem;
margin-right: 0.125rem;
padding-left: 0.125rem;
padding-right: 0.125rem;
display: flexbox;
text-align: center;
flex-direction: row;
justify-content: center;
font-size: 0.75rem;
background-color: white;
font-size: 0.5rem;
`