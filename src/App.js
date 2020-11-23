import React from 'react'
import { useState, useEffect } from 'react'
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
 */
import styled from 'styled-components'
import getDataDummy from './components/services/getDataDummy'
import ListBox from './components/modules/ListBox'


function App() {
  const [listBoxes, setListBoxes] = useState([])

  /* Aufruf der API, Variablennamen dürfen nicht mit bereits 
  deklarierten Namen übereinstimmen, sondern müssen neu vergeben werden */

  useEffect(() => {
    getDataDummy()
      .then((listBoxes) => setListBoxes(listBoxes.results))
      .catch((error) => console.log(error))
  }, [])

  /* Ausgabe des API Aufrufs über das ListBox Item, 
  welches über das entsprechende Modul aufgerufen wurde*/

  return (
    <div className="App">
      <Contentblock>
        {listBoxes.map(({ name, patronus, image }) => (
          <ListBox
            name={name}
            imgUrl={image}
            patronus={patronus}
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