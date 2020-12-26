import React, { useState, useEffect, Component } from 'react'
/* import DateTime from '../../services/systemServices/getCurrentTime' */
import saveLocally from '../../services/LocalStorage/saveLocally'
import loadLocally from '../../services/LocalStorage/loadLocally'
import { v4 as uuidv4 } from 'uuid';
import GetLists from '../../services/LocalStorage/GetList';

const Form = () => {
    const [bodyValues, setBodyValues] = useState(
        {
            health: '',
            bloodPressure: '',
            currentDate: ''
        })
    const [health, setHealth] = ('')
    const [bloodPressure, setBloodPressure] = ('')
    const [currentDate, setCurrentDate] = ('')

    const onHealthInput = () => {
        setHealth(event.target.value)
    }
    const onBloodInput = () => {
        setBloodPressure(event.target.value)
    }
    const onDateInput = () => {
        setCurrentDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBodyValues(health, bloodPressure, currentDate)
        console.log(localStorage);

        const BodyValuesFromLocalStorage = GetLists('bodyValues') ?? [];

        localStorage.setItem(
            'bodyValues',
            JSON.stringify([
                ...BodyValuesFromLocalStorage,
                { id: uuidv4(), currentDate, health, bloodPressure },
            ])
        );
    }

}