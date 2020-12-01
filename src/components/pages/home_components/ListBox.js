import styled from 'styled-components/macro'
import React from 'react'
import { Link } from 'react-router-dom'

const ListElement = ({ title, calories, image, ingredients }) => {
    return (
        <ListItem>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>

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
   display: grid;
    flex-direction: column;
    justify-content: space-around;
    max-width: 375px;
    bottom: 2px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: s;
    `

console.log(ListItem)

export default ListElement;