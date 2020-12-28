import { useState, useEffect } from 'react'
import React from 'react'
import loadLocally from '../../services/LocalStorage/loadLocally'
import Form from '../page_components/Form'
import { Line } from 'react-chartjs-2'
import GetLists from '../../services/LocalStorage/GetList';



const Chart = () => {
    /*  for (let i = 0; i < localStorage.length; i++) {
         const data = localStorage.key(i);
         console.log(data + ' : ' + localStorage.getItem(data));
     } */


    const data = () => {
        for (let i = 0; i < localStorage.length; i++) {
            const data = localStorage.key(i);
            console.log(data + ' : ' + localStorage.getItem(data));
        }
    }



    return <div>
        <Line
            data={{
                labels: data.timelabels,
                datasets: [{
                    label: 'Weight',
                    data: data.weightlabels
                },
                {
                    label: 'Heartrate',
                    data: data.heartlabels
                }
                ]
            }}
            height={200}
            width={360}
            options={{
                maintainAspectAatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
        />
    </div>
}

export default Chart