import styled from 'styled-components/macro'
import React from 'react'

const DefaultImage = '../services/images/OceanTrout.jpg'

const List = ({ title, imgUrl }) => {
    const listimage = imgUrl.Listimage === "N/A" ? DefaultImage : imgUrl.Listimage;
    return (
        <ListItem>
            <img src={imgUrl} alt="" />
            <h3>{title}</h3>

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

console.log(ListItem)

export default List;
