import Header from '../modules/Header'
import GetLists from '../services/LocalStorage/GetList'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'


export default function Profile() {
    const [shopThisList, setShopThisList] = useState(GetLists('shoppingList') ?? {})


    const ingredientsByRecipe = [];
    console.log(shopThisList)
    for (let recipeTitle in shopThisList) {
        ingredientsByRecipe.push({ title: recipeTitle, shoppingList: shopThisList[recipeTitle] });
    }


    console.log(ingredientsByRecipe)
    return (
        <div>

            <Header title="Profile" />

            <ProfileWrapper>
                {ingredientsByRecipe.map(ingredientList => (
                    <details>
                        <summary>{ingredientList.title}</summary>
                        <ul>
                            {ingredientList.shoppingList.map(ingredient => <li>{ingredient}</li>)}
                        </ul>
                    </details>

                ))}

            </ProfileWrapper>
        </div>

    )
}



/* const ProfileHeader = styled.div`
    position: absolute;
    margin-top: 0rem;` */

const ProfileWrapper = styled.section`
    width:100%;
`



