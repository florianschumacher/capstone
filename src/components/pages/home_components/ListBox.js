import styled from 'styled-components/macro'
import React from 'react'
import { Link } from 'react-router-dom'

const ListElement = ({ title, calories, image, ingredients }) => {
    return (
        <ListItem>
            <h2>{title}</h2>
            <p>{calories.toFixed(0)} Calories</p>

            <Link
                to={{
                    pathname: `/recipes/${urlTitle(title)}`,
                    state: { title, calories, image, ingredients }
                }}> <img src={image} alt="" /></Link>
        </ListItem>
    )
}
function urlTitle(title) {
    return encodeURI(title.toLowerCase().replace(/ /g, '-'))
}


const ListItem = styled.section`
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
        align-self: center;
    };
    img {
        border-radius: 0.1875rem;
        border: solid;
        border-color: #fff;
        border-width: 0.125rem;
    };
    `


export default ListElement;