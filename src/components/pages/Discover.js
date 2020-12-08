import SearchLogic from '../pages/home_components/Search'
import GlobalStyle from '../services/GlobalStyle'
import styled from 'styled-components/'
import React from 'react'
import Header from '../modules/Header'


const Discovery = () => {
    return (
        <HomeWrapper>
            <SearchLogic />
        </HomeWrapper>
    )
}

export default Discovery

const HomeWrapper = styled.div`

  margin-top: 80px;
  margin-bottom: 120px;
`
