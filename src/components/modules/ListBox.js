import styled from 'styled-components/macro'
import React from 'react'

export default function ListBox({ name, imgUrl, _ }) {
    return (
        <ListItem>
            <img src={imgUrl} alt="" />
            <h3>{name}</h3>
            <p>{_}</p>
        </ListItem>
    )
}


const ListItem = styled.section`
   display: grid;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    bottom: 2px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: yellow;
    `