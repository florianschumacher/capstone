import styled from "styled-components/macro";
import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Divider from '@material-ui/core/Divider';

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "20",
    width: "fit-content",
    bottom: "0rem",
    color: "red",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0, -1),
    },

  },
}));



export default function FooterNavigation({ onNavigate }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue); }} showLabels className={classes.root}>

      <BottomNavigationAction component={Link} to="/" label="Discover" value="Discover" icon={<RestaurantMenuIcon />} />
      <Divider orientation="vertical" flexItem />
      <BottomNavigationAction component={Link} to="/bookmarks" label="Bookmarks" value="Bookmarks" icon={<BookmarksIcon />} />
      <Divider orientation="vertical" flexItem />
      <BottomNavigationAction component={Link} to="/coaching" label="Coaching" value="Coaching" icon={<SupervisorAccountIcon />} />
      <Divider orientation="vertical" flexItem />
      <BottomNavigationAction component={Link} to="/progress" label="Progress" value="Progress" icon={<TrendingUpIcon />} />
      <Divider orientation="vertical" flexItem />
      <BottomNavigationAction component={Link} to="/profle" label="Profile" value="Profile" icon={<PersonIcon />} />

    </BottomNavigation>

  );
}

/* const ButtonGroup = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 3.125rem;
  max-width: 23.438rem;
  width: 100%;
  bottom: 0.313rem;
`; */

