import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
//
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import styled from 'styled-components/macro';
import Header from '../modules/Header';
import '../modules/page_components/ProfileCSS.css';
import GetLists from '../services/LocalStorage/GetList';
import saveLocally from '../services/LocalStorage/saveLocally';
import { SHOPPING_LIST_KEY } from '../services/LocalStorage/constants';

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
  const [shopThisList, setShopThisList] = useState(GetLists(SHOPPING_LIST_KEY) ?? []);

  const classes = useStyles();

  function onDelete(recipeId) {
    const newList = shopThisList.filter((listItem) => listItem.id !== recipeId);
    setShopThisList(newList);
    saveLocally(SHOPPING_LIST_KEY, newList);
  }

  return (
    <div>
      <Header title="Bookmarks" />
      <ProfileWrapper>
        <div className={classes.root}>
          {shopThisList.map(({ id, ingredients, title }) => (
            <Accordion>
              <AccordionSummary>
                <Typography>
                  <ul className="ULement">{title}</ul>
                </Typography>
                <Button className="Button" onClick={() => onDelete(id)}>
                  Delete
                </Button>
              </AccordionSummary>
              <ul className="ULement">
                {ingredients.map((ingredient) => (
                  <AccordionDetails>
                    <Typography>
                      <li className="LIement">{ingredient}</li>
                    </Typography>
                  </AccordionDetails>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
      </ProfileWrapper>
    </div>
  );
}

const ProfileWrapper = styled.section`
  display: flex;
  width: 100%;
  .ULement {
    padding-left: 0rem;
    margin-left: 0rem;
    min-width: 18.125rem;
    margin-top: 0;
    margin-bottom: 0;
  }
  .LIement {
    margin-left: 1.25rem;
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .Button {
    align-content: right;
    align-self: right;
    position: right;
    height: 1.5625rem;
    text-align: right;
    justify-content: flex-end;
  }
`;

const Button = styled.button``;
