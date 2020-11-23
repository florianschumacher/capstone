import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import getDataDummy from './components/services/getDataDummy'
import ListBox from './components/modules/ListBox'


function App() {
  const [ListBoxes, setListBoxes] = useState([])

  /* Aufruf der Morty API, Variablennamen dürfen nicht mit bereits 
  deklarierten Namen übereinstimmen, sondern müssen neu vergeben werden */

  useEffect(() => {
    getDataDummy()
      .then((data) => setListBoxes(data.results))
      .catch((error) => console.log(error))
  }, [])

  /* Ausgabe des API Aufrufs über das ListBox Item, 
  welches über das entsprechende Modul aufgerufen wurde*/

  return (
    <div className="App">
      <Contentblock>
        {ListBoxes.map(({ id, name, image }) => (
          <ListBox
            key={id}
            name={name}
            imgUrl={image}
          />
        ))}
      </Contentblock>
    </div>
  )
}

export default App;

const Contentblock = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
`