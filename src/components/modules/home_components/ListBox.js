import styled from 'styled-components/macro'
import React from 'react'
import { Link } from 'react-router-dom'

const ListElement = ({ title, calories, image, ingredients, portions, totalWeight, totalTime }) => {
    return (
        <ListItem>
            <Link
                to={{
                    pathname: `/recipes/${urlTitle(title)}`,
                    state: { title, calories, image, ingredients, portions, totalWeight, totalTime }
                }}> <h2>{title}</h2>
                <img src={image} alt="" /></Link>
        </ListItem>
    )
}
function urlTitle(title) {
    return encodeURI(title.toLowerCase().replace(/ /g, '-'))
}


const ListItem = styled.section`
    position: relative;
    margin-bottom: -1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    img {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        margin-top: 2rem;
        border-radius: 0.1875rem;
        border: solid;
        border-color: #fff;
        border-width: 0.125rem;
        max-height: 13rem;
        min-width: 21.875rem;
        object-fit: cover;
        z-index: 1;
        border-radius: 0.1875rem;
        background: #b28c4b;
        box-shadow: 0rem 0.25rem 0.5rem #b28c40; 
        };
        p {
        padding-top: 0rem;
        font-size: 1rem;
                align-self: right;
        z-index: 2;
        color: whitesmoke;
        background-color: hsla(50, 33%, 25%, 0.75);
            };
    h2 {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 10rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        min-width: 22rem;
        margin-left: 0.1rem;
        margin-right: 1.4rem;
        font-size: 1.2rem;
        font-weight: 200;
        z-index: 2;
        color: whitesmoke;
        background-color: hsla(50, 33%, 25%, 0.75);
};
    `

export default ListElement;