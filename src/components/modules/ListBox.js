import styled from 'styled-components/macro'
import React from 'react'

const ListElement = ({ title, calories, image, ingredients }) => {
    return (
        <ListItem>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </ListItem>
    )
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
    background-color: yellow;
    `

console.log(ListItem)

export default ListElement;
