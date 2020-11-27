import React from 'react'
import styled from 'styled-components/macro'
import SearchLogic from './components/modules/Search'
import GlobalStyle from '../src/components/services/GlobalStyle'
import Footer from './components/modules/Footer'

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <SearchLogic />
      <Contentblock>
        {/*         {listBoxes.map(({ name, image }) => (
          <List name={name} imgUrl={image} />
        ))} */}
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

