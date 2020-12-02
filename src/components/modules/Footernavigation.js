import styled from "styled-components/macro";
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: "0.313rem",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function FooterNavigation({ onNavigate }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button component={Link} to="/" >Discover</Button>

        <Button component={Link} to="/bookmarks" >Bookmarks</Button>

        <Button component={Link} to="/coaching" >Coaching</Button>

        <Button component={Link} to="/progress">Progress</Button>

        <Button component={Link} to="/profile">Profile</Button>

      </ButtonGroup>
    </div>
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
`;

const Button = styled.button`
  display: block;
  height: 2.813;
  background-color: yellow;
  font-weight: 800;
  color: hsla(0, 0%, 8%)
  border-radius: 0.25rem;
  border-style: none;
  background-color: hsla(216, 50%, 96%);
  box-shadow: 0 0.188rem 0.25rem hsla(203, 39%, 88%)
`; */
