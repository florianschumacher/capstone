//Functions
import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages, Styles & Modules
import Discovery from './components/pages/Discover'
import Bookmarks from './components/pages/Bookmarks'
import Coaching from './components/pages/Coaching'
import Progress from './components/pages/Progress'
import Profile from './components/pages/Profile'
import GlobalStyle from '../src/components/services/GlobalStyle'
import FooterNavigation from './components/modules/Footernavigation'
import Recipes from './components/pages/Recipes'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Discovery />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/coaching">
            <Coaching />
          </Route>
          <Route path="/progress">
            <Progress />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/recipes" >
            <Recipes />
          </Route>
        </Switch>
        <FooterNavigation />
      </div>


    </Router>
  )
}


