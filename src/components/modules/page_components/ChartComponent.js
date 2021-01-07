import React from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components/macro'



const Chart = () => {
    const bodyValues = localStorage.getItem('bodyValues');
    const data = JSON.parse(bodyValues) ?? [];

    const datelabels = data.map(entry => entry.currentDate)
    const weightlabels = data.map(entry => entry.health)
    const heartlabels = data.map(entry => entry.bloodPressure)

    console.log(datelabels + 'chart Component')

    return <div>
        <LineContainer>
            <Line
                data={{
                    labels: datelabels,
                    datasets: [{
                        label: 'Weight',
                        data: weightlabels
                    },
                    {
                        label: 'Heartrate',
                        data: heartlabels
                    }
                    ]
                }}
                height={200}
                width={300}
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
        </LineContainer>
    </div>
}

export default Chart

const LineContainer = styled.div`
max-width: 100%`