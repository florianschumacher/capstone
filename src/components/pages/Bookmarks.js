import Header from '../modules/Header'
import GetLists from '../services/LocalStorage/GetList'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import '../modules/page_components/ProfileCSS.css'

//
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
//

export default function Profile() {
    const [shopThisList, setShopThisList] = useState(GetLists('shoppingList') ?? {})

    //
    const classes = useStyles()
    //

    const ingredientsByRecipe = [];
    console.log(shopThisList)
    for (let recipeTitle in shopThisList) {
        ingredientsByRecipe.push({ title: recipeTitle, shoppingList: shopThisList[recipeTitle] });
    }


    console.log(ingredientsByRecipe)
    return (
        <div>
            <Header title="Bookmarks" />
            <ProfileWrapper>
                <div className={classes.root}>
                    {ingredientsByRecipe.map(ingredientList => (
                        <Accordion>
                            <AccordionSummary>
                                <Typography>
                                    <ul className='ULement'>{ingredientList.title}</ul>
                                </Typography>
                                <Button className='Button' onclick={() => { alert('Zomg, i´am clicked') }}>Delete</Button>
                            </AccordionSummary>
                            <ul className='ULement'>
                                {ingredientList.shoppingList.map(ingredient =>
                                    <AccordionDetails>
                                        <Typography>
                                            <li className='LIement'>{ingredient}</li>
                                        </Typography>
                                    </AccordionDetails>)}
                            </ul>
                        </Accordion>
                    ))}

                </div>

            </ProfileWrapper>
        </div>
    )
}


const ProfileWrapper = styled.section`
    display: flex;
    width:100%;
    .ULement {
    padding-left:0rem;
    margin-left:0rem;
    min-width: 18.125rem;
    margin-top: 0;
    margin-bottom: 0;
    };
    .LIement{
    margin-left: 1.25rem;
    margin-top: 0px;
    margin-bottom:0px;
    list-style: none;
    padding-top: 0px;
    padding-bottom: 0px;
    };
    .Button {
    align-content: right;    
    align-self: right;
    position: right;
    height:1.5625rem;
    text-align: right;
    justify-content: flex-end; 
    };
`


const Button = styled.button`

`