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
            <ProfileHeader>
                <Header title="Profile" />
            </ProfileHeader>
            <ProfileWrapper>
                <ul>
                    {ingredientsByRecipe.map(ingredientList => (
                        <li>{ingredientList.title}
                            <ul>
                                {ingredientList.shoppingList.map(ingredient => <li>{ingredient}</li>)}
                            </ul>
                        </li>
                    ))}
                </ul>
            </ProfileWrapper>
        </div>

    )
}



const ProfileHeader = styled.div`
position: absolute;
    margin-top: 0rem;`


const ProfileWrapper = styled.section`
    position:relative;
    width:100%;
    z-index:1;
    margin-top: 20px;
    margin-bottom: 120px;
    list-style: none;`



