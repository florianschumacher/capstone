import React from 'react'
import ListElement from '../home_components/ListBox'
import Gallery from './subsite_components/Gallery'

const detailElement = ListElement.map((detail) => detail)
const DetailPage = ({ detailElement }) => {
    return (
        <Gallery />
    )
}