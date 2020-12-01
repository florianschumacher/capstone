import SearchLogic from '../pages/home_components/Search'
import GlobalStyle from '../services/GlobalStyle'
import styled from 'styled-components/'
import React from 'react'


const Discovery = () => {
    return (
        <HomeWrapper>
            <GlobalStyle />
            <SearchLogic />
        </HomeWrapper>
    )
}

export default Discovery

const HomeWrapper = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
`