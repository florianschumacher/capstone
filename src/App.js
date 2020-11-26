import React from 'react'
import { useState, useEffect } from 'react'
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
 */
import styled, { createGlobalStyle } from 'styled-components/macro'
import getDataDummy from './components/services/getDataDummy'
import List from './components/modules/ListBox'
import Search from './components/modules/SearchAlternate'
import GlobalStyle from '../src/components/services/GlobalStyle'
import Footer from './components/modules/Footer'

function App() {
  const [listBoxes, setListBoxes] = useState([])

  /* Aufruf der API, Variablennamen dürfen nicht mit bereits
  deklarierten Namen übereinstimmen, sondern müssen neu vergeben werden */

  useEffect(() => {
    getDataDummy()
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }, [])

  /* Ausgabe des API Aufrufs über das ListBox Item,
  welches über das entsprechende Modul aufgerufen wurde*/

  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      <Contentblock>
        {listBoxes.map(({ name, image }) => (
          <List name={name} imgUrl={image} />
        ))}
      </Contentblock>
      <Footer />
    </div>
  )
}

export default App

const Contentblock = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
`

