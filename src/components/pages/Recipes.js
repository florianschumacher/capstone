import { useLocation } from "react-router-dom";
import styled from 'styled-components/macro';


export default function Recipes() {
    const location = useLocation()
    const { title, calories, image, ingredients } = location.state
    return (
        <RecipeWrapper>
            <h1>
                {title}
            </h1>
            <img src={image} alt="" />
            <p>
                {calories.toFixed(0)}
            </p>
            <ul>
                <li>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </li>
            </ul>
        </RecipeWrapper>
    )
}


const RecipeWrapper = styled.section`
    margin-top: 3rem;
    margin-bottom: -2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 21.875rem;
    max-width: 21.875rem;
    bottom: 0.125rem;
    border: 0.0125rem solid gray;
    border-radius: 0.1875rem;
    background: #b28c4b;
    box-shadow: 0rem 0.25rem 0.5rem #b28c40;
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: -0.3125rem;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
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
    };
    `