import React from 'react'
import { useState, useEffect } from 'react'
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
 */
import styled, { createGlobalStyle } from 'styled-components/macro'
import getDataDummy from './components/services/getDataDummy'
import ListBox from './components/modules/ListBox'
import Search from './components/modules/SearchAlternate'

function App() {
  const [listBoxes, setListBoxes] = useState([])

  /* Aufruf der API, Variablennamen dürfen nicht mit bereits
  deklarierten Namen übereinstimmen, sondern müssen neu vergeben werden */

  useEffect(() => {
    // getDataDummy()
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error))
  }, [])

  /* Ausgabe des API Aufrufs über das ListBox Item,
  welches über das entsprechende Modul aufgerufen wurde*/

  return (
    <div className="App">
      <Search />
      <Contentblock>
        {listBoxes.map(({ name, image }) => (
          <ListBox name={name} imgUrl={image} />
        ))}
      </Contentblock>
      <GlobalStyle />
    </div>
  )
}

export default App

const Contentblock = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
`

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 375px;

  }`
