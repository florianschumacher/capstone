import React from 'react'
import { Line } from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Line
            data={{
                labels: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
                datasets: [{
                    label: 'Weight',
                    data: [12, 19, 3, 5, 2, 3]
                },
                {
                    label: 'Bloodpressure',
                    data: [78, 68, 79, 100, 90, 56]
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

export default BarChart